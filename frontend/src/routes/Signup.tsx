import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupForm = z.infer<typeof signupSchema>;

export const Route = createFileRoute()({
  component: Signup,
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupForm) => {
    console.log("Signup data:", data);
    // later → API call
  };

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
          Signup
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Create your Ledger account
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Username"
              fullWidth
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isSubmitting}
            >
              Create Account
            </Button>
          </Stack>
        </form>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          mt={3}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none", fontWeight: 500 }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
