import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { router } from "../src/router";
import { theme } from "./theme";

const elem = document.getElementById("root")!;

const app = (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

createRoot(elem).render(app);
