import { IPerfil } from "../../common/index.interface";

export class CreateDto {
  email: string;
  nome: string;
  perfil: IPerfil;
  senha: string;
}

export class GetDto {
  id: number;
  email: string;
  nome: string;
  perfil: IPerfil;
}

export class LoginDto {
  email: string;
  senha: string;
}
