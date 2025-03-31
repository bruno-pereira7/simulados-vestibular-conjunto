import { Navigate, Route, Routes } from "react-router";
import { HomeAdminPage } from "./pages/home-admin.component";
import { HomeUsuarioPage } from "./pages/home-usuario.component";
import { HomePage } from "./pages/home.component";
import { LoginPage } from "./pages/login.component";
import { NotFoundPage } from "./pages/not-found.component";
import { authService } from "./services/auth.service";

export const AppRouting = () => {
  const AuthenticatedRouter = ({ children }: { children: React.ReactNode }) => {
    if (!authService.isAuthenticated()) return <Navigate to="/login" replace />;

    return <>{children}</>;
  };

  const AuthenticatedAdminRouter = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    if (!authService.isAuthenticatedAdmin())
      return <Navigate to="/login" replace />;

    return <>{children}</>;
  };

  return (
    <Routes>
      {/* <-------------------------------------------------- Rotas Públicas */}
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {/* <-------------------------------------------------- Rotas Públicas */}
      {/* <-------------------------------------------------- Rotas Usuários */}
      <Route
        path="/usuario/"
        element={
          <AuthenticatedRouter>
            <Routes>
              <Route index element={<HomeUsuarioPage />} />
            </Routes>
          </AuthenticatedRouter>
        }
      />
      {/* <-------------------------------------------------- Rotas Usuários */}
      {/* <--------------------------------------------- Rotas Administrador */}
      <Route
        path="/admin/"
        element={
          <AuthenticatedAdminRouter>
            <Routes>
              <Route index element={<HomeAdminPage />} />
            </Routes>
          </AuthenticatedAdminRouter>
        }
      />
      {/* <--------------------------------------------- Rotas Administrador */}
    </Routes>
  );
};
