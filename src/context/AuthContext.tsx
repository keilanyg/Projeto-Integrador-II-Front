import React, { createContext, useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { AxiosResponse } from "axios";
import { User } from "@/@types/models";
import { UserService } from "@/services/user";
import { toast } from "react-toastify";
import { apiAcervo } from "@/services/api";
import { usePathname, useRouter } from "next/navigation";
import { updateTokensInCookies } from "@/utils/updateTokensInCookies";

const OPEN_ROUTES = ["/login", "/usuario/criar", "/"];

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(
    credentials: SignInCredentials
  ): Promise<AxiosResponse<unknown, unknown>>;
  isAuthenticated: boolean;
  user: User;
  updateUserState(data: User): void;
  getUsersMe(): void;
};

const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = !!user.first_name;
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const { appTokenAccess: token, appTokenRefresh: refresh } = parseCookies();

    if (!OPEN_ROUTES.includes(pathName || "")) {
      if (token && !isAuthenticated) {
        apiAcervo.defaults.headers.Authorization = `Bearer ${token}`;
        getUsersMe();
      }
    }
  }, []);

  async function getUsersMe() {
    const userService = new UserService();

    try {
      const response = await userService.me();
      setUser(response.data);

      if (response.data.groups[0].name === "usuarios") {
        return router.push("/acervo");
      } else {
        return router.push("/perfil");
      }
    } catch (error) {
      toast.error("Error");
    }
  }

  async function signIn(data: SignInCredentials) {
    const userService = new UserService();

    try {
      const response = await userService.login({
        ...data,
      });
      const { access, refresh } = response.data;
      updateTokensInCookies({ access, refresh });

      apiAcervo.defaults.headers.Authorization = `Bearer ${access}`;
      getUsersMe();
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  function updateUserState(data: typeof user) {
    setUser((prev) => ({ ...prev, ...data }));
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        updateUserState,
        getUsersMe,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
