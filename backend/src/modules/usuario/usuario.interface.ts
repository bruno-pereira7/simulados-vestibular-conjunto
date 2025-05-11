import { IPerfil } from "../../common/index.interface";

export interface IUsuario {
  email: string;
  id: number;
  nome: string;
  perfil: IPerfil;
  senha: string;
}
