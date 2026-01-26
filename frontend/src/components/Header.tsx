import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function Header() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar sx={{ minHeight: 80 }}>
        <Typography variant="h6" fontWeight={600}>
          Ledger
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
