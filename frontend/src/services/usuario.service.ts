import { IApiResponse, ICrud } from "../types/index.type";
import { IUsuario } from "../types/usuario.type";
import { apiService } from "./api.service";

export const usuarioService: ICrud<IUsuario, number> = {
  create: (data: Partial<IUsuario>) => {
    return apiService.post<IApiResponse<number>>(`/usuarios`, data);
  },
  delete: (id: number) => {
    return apiService.delete<IApiResponse<number>>(`/usuarios/${id}`);
  },
  findAll: () => {
    return apiService.get<IApiResponse<Array<IUsuario>>>(`/usuarios`);
  },
  findOne: (id: number) => {
    return apiService.post<IApiResponse<IUsuario>>(`/usuarios/${id}`);
  },
  update: (id: number, data: IUsuario) => {
    return apiService.put<IApiResponse<number>>(`/usuarios/${id}`, data);
  },
};
