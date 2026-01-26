// src/routes/__root.tsx
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SpeedDialTooltipOpen from "../components/SpeedDialTooltipOpen";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <SpeedDialTooltipOpen />
    </Box>
  );
}
