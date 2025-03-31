export interface IApiResponse<T = ""> {
  codigo: number; // Código HTTP
  dados: T; // Array com os dados de resposta, objeto com um registro ou true/false para rotas que necessitam de apenas confirmação
  icone: "success" | "error" | "warning" | "info" | "question"; // Ícone que vai ser usado no Swal
  mensagem: string; // Mensagem resposta à requisição
  titulo: string; // Título que vai ser usado no Swal
  valido: boolean; // true quando a requisição tiver sucesso e false quando der erro
}

export interface ICrud<T, ID> {
  create: (data: Partial<T>) => Promise<ID>;
  delete: (id: ID) => Promise<number>;
  findAll: () => Promise<Array<Partial<T>>>;
  findOne: (id: ID) => Promise<Partial<T> | null>;
  update: (id: ID, data: T) => Promise<number>;
}
