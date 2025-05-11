export interface IApiResponse<T = ""> {
  codigo: number; // Código HTTP
  dados: T; // Array com os dados de resposta, objeto com um registro ou true/false para rotas que necessitam de apenas confirmação
  icone: "success" | "error" | "warning" | "info" | "question"; // Ícone que vai ser usado no Swal
  mensagem: string; // Mensagem resposta à requisição
  titulo: string; // Título que vai ser usado no Swal
  valido: boolean; // true quando a requisição tiver sucesso e false quando der erro
}

export interface ICrudController<T, ID> {
  create: (data: Partial<T>) => Promise<IApiResponse<boolean>>;
  delete: (id: ID) => Promise<IApiResponse<boolean>>;
  findAll: () => Promise<IApiResponse<Array<Partial<T>>>>;
  findOne: (id: ID) => Promise<IApiResponse<Partial<T> | object>>;
  update: (id: ID, data: T) => Promise<IApiResponse<boolean>>;
}

export interface ICrudService<T, ID> {
  create: (data: Partial<T>) => Promise<boolean>;
  delete: (id: ID) => Promise<boolean>;
  findAll: () => Promise<Array<Partial<T>>>;
  findOne: (id: ID) => Promise<Partial<T> | object>;
  update: (id: ID, data: T) => Promise<boolean>;
}

export interface IDefaultApiResponse {
  DEFAULT_SUCCESS: Readonly<IApiResponse<boolean>>;
  DEFAULT_WARNING: Readonly<IApiResponse<boolean>>;
  DEFAULT_ERROR: Readonly<IApiResponse<boolean>>;
}

export interface IApiResponseConstants {
  FIND_ALL: {
    SUCCESS: IApiResponse<Array<never>>;
    WARNING: IApiResponse<Array<never>>;
    ERROR: IApiResponse<Array<never>>;
  };
  FIND_ONE: {
    SUCCESS: IApiResponse<object>;
    WARNING: IApiResponse<object>;
    ERROR: IApiResponse<object>;
  };
  CREATE: {
    SUCCESS: IApiResponse<boolean>;
    WARNING: IApiResponse<boolean>;
    ERROR: IApiResponse<boolean>;
  };
  UPDATE: {
    SUCCESS: IApiResponse<boolean>;
    WARNING: IApiResponse<boolean>;
    ERROR: IApiResponse<boolean>;
  };
  DELETE: {
    SUCCESS: IApiResponse<boolean>;
    WARNING: IApiResponse<boolean>;
    ERROR: IApiResponse<boolean>;
  };
}

export interface IConfiguration {
  ENVIRONMENT: string;
  JWT_SECRET: string;
  PORT: number;
}

export interface IJwtPayload {
  id: number;
  email: string;
  nome: string;
  perfil: IPerfil;
}

export type IPerfil = "Administrador" | "Aluno";
