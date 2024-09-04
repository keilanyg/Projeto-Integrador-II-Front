export  interface Autor {
    id: number;
    nome_autor: string;
}
  
export  interface Categoria {
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
    autor_obj: Autor
    editora_obj: Editora
    categoria_obj: Categoria
    instituicao: string;
}
  