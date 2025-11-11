import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  FormHelperText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  loginAsync,
  selectLoginStatus,
  selectLoginError,
  clearLoginError,
  resetLoginStatus,
} from "../AuthSlice";
import { toast } from "react-toastify";
import { login } from "../../../assets";

const palette = {
  olive: "#4B6043",
  darkOlive: "#556E51",
  stone: "#F0F1EB",
  text: "#1F1F1F",
  white: "#FFFFFF",
};

export const Login = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoginStatus);
  const error = useSelector(selectLoginError);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => dispatch(loginAsync(data));

  React.useEffect(() => {
    if (error) toast.error(error.message);
    return () => dispatch(clearLoginError());
  }, [error]);

  React.useEffect(() => {
    if (status === "fulfilled") {
      toast.success("Connexion réussie");
      reset();
      dispatch(resetLoginStatus());
      navigate("/");
    }
  }, [status]);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        background: palette.stone,
      }}
    >
      {/* Main title */}
      <Typography
        variant="h3"
        sx={{
          mb: 5,
          fontWeight: 800,
          background: `linear-gradient(90deg, ${palette.olive}, ${palette.darkOlive})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center",
          letterSpacing: 0.5,
        }}
      >
        Bienvenue chez FINI PRO
      </Typography>

      {/* Container */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        sx={{
          width: "100%",
          maxWidth: 950,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left image */}
        {!isMobile && (
          <Box flex={1} display="flex" justifyContent="center" alignItems="center">
            <img
              src={login}
              alt="FINI PRO"
              style={{
                width: "100%",
                maxWidth: 380,
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 8px 20px rgba(75,96,67,0.25)",
              }}
            />
          </Box>
        )}

        {/* Form */}
        <PaperMotion onSubmit={handleSubmit(handleLogin)}>
          <Typography variant="h5" fontWeight={700} sx={{ color: palette.olive, mb: 1 }}>
            Connectez-vous à votre espace
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: palette.text, mb: 3, fontSize: 15, textAlign: "center" }}
          >
            Gérez vos services, demandes et livraisons facilement.
          </Typography>

          <Stack spacing={2.5} width="100%">
            <TextField
              placeholder="Email professionnel"
              fullWidth
              variant="outlined"
              {...register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email invalide",
                },
              })}
            />
            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}

            <TextField
              placeholder="Mot de passe"
              type="password"
              fullWidth
              variant="outlined"
              {...register("password", { required: "Le mot de passe est requis" })}
            />
            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={status === "pending"}
                sx={{
                  py: 1.4,
                  fontWeight: 700,
                  fontSize: 16,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${palette.olive}, ${palette.darkOlive})`,
                  boxShadow: "0 6px 16px rgba(75,96,67,0.4)",
                  "&:hover": {
                    background: `linear-gradient(90deg, ${palette.darkOlive}, ${palette.olive})`,
                    boxShadow: "0 8px 22px rgba(75,96,67,0.45)",
                  },
                }}
              >
                Se connecter
              </Button>
            </motion.div>
          </Stack>

          <Stack spacing={1.5} mt={3} textAlign="center">
            <Typography
              component={Link}
              to="/forgot-password"
              sx={{
                textDecoration: "none",
                color: palette.olive,
                fontWeight: 500,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Mot de passe oublié ?
            </Typography>
            <Typography
              component={Link}
              to="/signup"
              sx={{
                textDecoration: "none",
                color: palette.darkOlive,
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Pas encore de compte ? Créez-en un
            </Typography>
          </Stack>
        </PaperMotion>
      </Stack>
    </Box>
  );
};

// Motion form component
const PaperMotion = ({ children, ...props }) => (
  <motion.form
    {...props}
    style={{
      flex: 1,
      backgroundColor: "#fff",
      padding: "2.5rem",
      borderRadius: "1.5rem",
      boxShadow: "0 10px 40px rgba(75,96,67,0.2)",
      maxWidth: "450px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {children}
  </motion.form>
);
