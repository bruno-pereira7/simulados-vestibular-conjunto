import { IApiResponseConstants, IDefaultApiResponse } from "../index.interface";

const { DEFAULT_SUCCESS, DEFAULT_WARNING, DEFAULT_ERROR }: IDefaultApiResponse =
  {
    DEFAULT_SUCCESS: {
      codigo: 200,
      dados: true,
      icone: "success",
      mensagem: "Ação realizada com sucesso!",
      titulo: "Sucesso!",
      valido: true,
    },
    DEFAULT_WARNING: {
      codigo: 400,
      dados: false,
      icone: "warning",
      mensagem: "Não foi possível realizar a ação!",
      titulo: "Aviso!",
      valido: true,
    },
    DEFAULT_ERROR: {
      codigo: 500,
      dados: false,
      icone: "error",
      mensagem: "Erro ao realizar a ação!",
      titulo: "Erro!",
      valido: false,
    },
  };

export const API_RESPONSE_CONSTANTS: IApiResponseConstants = Object.freeze({
  FIND_ALL: {
    SUCCESS: {
      ...DEFAULT_SUCCESS,
      dados: [],
    },
    WARNING: {
      ...DEFAULT_WARNING,
      dados: [],
      mensagem: "Não foi possível realizar a consulta!",
    },
    ERROR: {
      ...DEFAULT_ERROR,
      dados: [],
      mensagem: "Não foi possível realizar a consulta!",
    },
  },
  FIND_ONE: {
    SUCCESS: {
      ...DEFAULT_SUCCESS,
      dados: {},
    },
    WARNING: {
      ...DEFAULT_WARNING,
      dados: {},
      mensagem: "Não foi possível realizar a consulta!",
    },
    ERROR: {
      ...DEFAULT_ERROR,
      dados: {},
      mensagem: "Não foi possível realizar a consulta!",
    },
  },
  CREATE: {
    SUCCESS: {
      ...DEFAULT_SUCCESS,
      mensagem: "Cadastro realizado com sucesso!",
    },
    WARNING: {
      ...DEFAULT_WARNING,
      mensagem: "Não foi possível realizar o cadastro!",
    },
    ERROR: {
      ...DEFAULT_ERROR,
      mensagem: "Não foi possível realizar o cadastro!",
    },
  },
  UPDATE: {
    SUCCESS: {
      ...DEFAULT_SUCCESS,
      mensagem: "Registro alterado com sucesso!",
    },
    WARNING: {
      ...DEFAULT_WARNING,
      mensagem: "Não foi possível realizar a alteração!",
    },
    ERROR: {
      ...DEFAULT_ERROR,
      mensagem: "Não foi possível realizar a alteração!",
    },
  },
  DELETE: {
    SUCCESS: {
      ...DEFAULT_SUCCESS,
      mensagem: "Registro excluído com sucesso!",
    },
    WARNING: {
      ...DEFAULT_WARNING,
      mensagem: "Não foi possível realizar a exclusão!",
    },
    ERROR: {
      ...DEFAULT_ERROR,
      mensagem: "Não foi possível realizar a exclusão!",
    },
  },
});
