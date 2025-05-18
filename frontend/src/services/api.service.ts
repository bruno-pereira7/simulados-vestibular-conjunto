import axios from "axios";
import Swal from "sweetalert2";
import { IApiResponse } from "../types/index.type";

export const apiService = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const errorSwal = ({
  response: {
    data: { mensagem, icone, titulo },
  },
}: {
  response: { data: IApiResponse };
}) => {
  Swal.fire({
    icon: icone,
    title: titulo,
    text: mensagem,
  });
};
