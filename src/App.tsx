import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";

export default function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}
