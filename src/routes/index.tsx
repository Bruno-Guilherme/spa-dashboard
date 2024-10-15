import { createBrowserRouter, Outlet } from "react-router-dom";
import { ErrorPage } from "../pages";
import { Button } from "@mui/material";
import { useAppThemeContext } from "../shared/contexts";
import { MenuLateral } from "../shared/components";

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

// Mover o hook para dentro do componente funcional
function HomePage() {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Button variant="contained" onClick={toggleTheme}>
      Olá Mundo!
    </Button>
  );
}

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MenuLateral />, // Agora usando o componente funcional HomePage
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <HomePage /> }],
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
