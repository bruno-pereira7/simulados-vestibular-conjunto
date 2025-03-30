export class CreateDto {
  email: string;
  nome: string;
  perfil: string;
  senha: string;
}

export class GetDto {
  id: number;
  email: string;
  nome: string;
  perfil: string;
}
