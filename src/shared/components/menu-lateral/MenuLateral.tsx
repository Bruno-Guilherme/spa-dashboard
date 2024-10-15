import { Box, Divider, Drawer, Toolbar, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

// Define a largura do menu lateral

export const MenuLateral = () => {
  const theme = useTheme();
  const drawerWidth = theme.spacing(30);
  return (
    <Box sx={{ display: "flex" }}>
      {/* Menu Lateral (Drawer) */}
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <div>Menu Lateral</div>
      </Drawer>

      {/* Conteúdo Principal ao lado do Menu */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: drawerWidth,
          height: "100vh",
          width: "100vw",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
