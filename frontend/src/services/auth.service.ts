import { decodeJwt } from "jose";
import { IPerfil } from "../types/index.type";

export const authService = {
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem("token");

    if (!token || token === "") return false;

    try {
      const { exp } = decodeJwt(token) as { exp: number };
      return exp * 1000 >= Date.now();
    } catch {
      localStorage.removeItem("token");
      return false;
    }
  },
  isAuthenticatedAdmin: (): boolean => {
    const token = localStorage.getItem("token");

    if (!token || token === "") return false;

    try {
      const { exp, perfil } = decodeJwt(token) as {
        exp: number;
        perfil: IPerfil;
      };
      return exp * 1000 >= Date.now() && perfil === "Administrador";
    } catch {
      localStorage.removeItem("token");
      return false;
    }
  },
};
