import { NavLink } from "react-router";
import logo from "../assets/logo.png";

export const HeaderAdminComponent = () => {
  return (
    <nav className="flex w-[200px] flex-col items-center bg-gray-500">
      <div className="flex h-30 w-full items-center justify-center p-4">
        <img className="h-full object-contain" src={logo} />
      </div>
      <NavLink to={"/admin/importar-prova"}>Importar Prova</NavLink>
      <button>Sair</button>
    </nav>
  );
};
