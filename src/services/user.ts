import { apiAcervo } from "./api";

export class UserService {
  create(data: any) {
    return apiAcervo.post("/user/", data);
  }

  me() {
    return apiAcervo.get("/user/me/");
  }

  login(data: any) {
    return apiAcervo.post("/token/", data);
  }
}
