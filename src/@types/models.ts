export interface Autor {
  id: number;
  nome_autor: string;
}

export interface Categoria {
  id: number;
  nome_categoria: string;
}

export interface Editora {
  id: number;
  nome_editora: string;
}

export interface Livros {
  id: number;
  cover: string;
  nome_livro: string;
  autor_obj: Autor;
  editora_obj: Editora;
  categoria_obj: Categoria;
  instituicao: string;
}
export interface Group {
  id: number;
  name: string;
}

export interface User {
  first_name: string;
  last_name: string;
  email: string | null;
  groups: Group[];
  profile_picture: string;
}
