import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Container, ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "../themes";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const useAppThemeContext = () => useContext(ThemeContext);

export const AppThemeProvider = ({ children }: IThemeProviderProps) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  const toggleTheme = useCallback(() => {
    setThemeName((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);
  const theme = useMemo(
    () => (themeName === "light" ? LightTheme : DarkTheme),
    [themeName]
  );

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: theme.palette.background.default,
          }}
        >
          {children}
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
