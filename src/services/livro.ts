import { apiAcervo } from "./api";

export class CategoriaService {
  create(data: any) {
    return apiAcervo.post("/livro/", data);
  }

  list() {
    return apiAcervo.get("/livros/");
  }

  detalhes(id: string) {
    return apiAcervo.get("/livros/${}");
  }
}
