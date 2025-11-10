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
  bronze: "#AD946B",
  sand: "#C6B37E",
  clay: "#AD846B",
  bg: "linear-gradient(180deg, #FAF9F7 0%, #F6F3EF 100%)",
  text: "#2B2B2B",
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
        background: palette.bg,
      }}
    >
      {/* Titre principal */}
      <Typography
        variant="h3"
        sx={{
          mb: 5,
          fontWeight: 800,
          background: `linear-gradient(90deg, ${palette.bronze}, ${palette.clay})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center",
          letterSpacing: 0.5,
        }}
      >
        Bienvenue chez EHR
      </Typography>

      {/* Conteneur principal */}
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
        {/* Image gauche */}
        {!isMobile && (
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={login}
              alt="EHR"
              style={{
                width: "100%",
                maxWidth: 380,
                borderRadius: "20px",
                objectFit: "contain",
                boxShadow: "0 8px 20px rgba(173,148,107,0.25)",
              }}
            />
          </Box>
        )}

        {/* Formulaire */}
        <PaperMotion
          onSubmit={handleSubmit(handleLogin)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ color: palette.bronze, mb: 1 }}
          >
            Connectez-vous à votre espace
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(43,43,43,0.7)",
              mb: 3,
              fontSize: 15,
            }}
          >
            Gérez vos services, demandes et livraisons facilement.
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              placeholder="Email professionnel"
              fullWidth
              variant="outlined"
              {...register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                  message: "Email invalide",
                },
              })}
            />
            {errors.email && (
              <FormHelperText error>{errors.email.message}</FormHelperText>
            )}

            <TextField
              placeholder="Mot de passe"
              type="password"
              fullWidth
              variant="outlined"
              {...register("password", {
                required: "Le mot de passe est requis",
              })}
            />
            {errors.password && (
              <FormHelperText error>{errors.password.message}</FormHelperText>
            )}

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
                  background: `linear-gradient(90deg, ${palette.bronze}, ${palette.sand})`,
                  boxShadow: "0 6px 16px rgba(173,132,107,0.4)",
                  "&:hover": {
                    background: `linear-gradient(90deg, ${palette.clay}, ${palette.sand})`,
                    boxShadow: "0 8px 22px rgba(173,132,107,0.45)",
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
                color: palette.bronze,
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
                color: palette.clay,
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

// ✅ Composant Motion pour le formulaire
const PaperMotion = ({ children, ...props }) => (
  <motion.form
    {...props}
    style={{
      flex: 1,
      backgroundColor: "#fff",
      padding: "2.5rem",
      borderRadius: "1.5rem",
      boxShadow: "0 10px 40px rgba(173,148,107,0.2)",
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
