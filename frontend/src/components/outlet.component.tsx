import { IPerfil } from "../types/index.type";
import { HeaderAdminComponent } from "./header-admin.component";
import { HeaderComponent } from "./header.component";

interface IProps {
  children: React.ReactNode;
  Header?: IPerfil;
}

export const OutletComponent = ({ children, Header }: IProps) => {
  return Header === "Público" ? (
    <div className="flex h-full min-h-screen w-full min-w-screen flex-col">
      <HeaderComponent />
      {children}
    </div>
  ) : Header === "Aluno" ? (
    <div className="flex h-full min-h-screen w-full min-w-screen flex-col">
      <HeaderComponent />
      {children}
    </div>
  ) : Header === "Administrador" ? (
    <div className="flex h-full min-h-screen w-full min-w-screen">
      <HeaderAdminComponent />
      {children}
    </div>
  ) : (
    <div className="flex h-full min-h-screen w-full flex-col">{children}</div>
  );
};
