import { createBrowserRouter, Outlet } from "react-router-dom";
import { ErrorPage } from "../pages";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <a href="/dashboard/profile">Perfil</a>
        <a href="/dashboard/settings">Configurações</a>
      </nav>
      <Outlet /> {/* Renderiza os componentes filhos aqui */}
    </div>
  );
}

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <div>Olá Mundo!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <div>Sobre Nós</div>,
  },
  {
    path: "/contact",
    element: <div>Contato</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />, // Componente Dashboard que renderiza o Outlet
    children: [
      {
        path: "profile",
        element: <div>Perfil do Usuário</div>, // Conteúdo da rota filha "profile"
      },
      {
        path: "settings",
        element: <div>Configurações</div>, // Conteúdo da rota filha "settings"
      },
    ],
  },
]);
