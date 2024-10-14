import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { AppThemeProvider } from "./shared/contexts";

export default function App() {
  return (
    <AppThemeProvider>
      <RouterProvider router={routers} />
    </AppThemeProvider>
  );
}
