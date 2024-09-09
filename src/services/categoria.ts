import { apiAcervo } from "./api";

export class CategoriaService {
  create(data: any) {
    return apiAcervo.post("/categoria/", data);
  }

  list() {
    return apiAcervo.get("/categoria/");
  }

  edit(data: any) {
    return apiAcervo.patch("/categoria/", data);
  }
}
