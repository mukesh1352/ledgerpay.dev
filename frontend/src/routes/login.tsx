import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: { xs: 4, sm: 6, md: 8 },
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 3,
          boxShadow: 2,
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Login
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Sign in to your Ledger account
        </Typography>

        <Stack spacing={2}>
          {/* Username */}
          <TextField
            label="Username"
            fullWidth
            required
          />

          {/* Password */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
          >
            Login
          </Button>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          mt={3}
        >
          Don’t have an account?{" "}
          <Link to="/Signup" style={{ textDecoration: "none", fontWeight: 500 }}>
            Signup
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
