import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light", // or "dark"

    primary: {
      main: "#6366f1", // Indigo (very modern)
    },
    secondary: {
      main: "#06b6d4", // Cyan
    },
    background: {
  default: "#eef2f7",
  paper: "#ffffff",
},
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: "none" }, // IMPORTANT
  },

  shape: {
    borderRadius: 10,
  },
});
