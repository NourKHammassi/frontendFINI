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
  InputAdornment,
  IconButton,
  Paper,
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
import { login, vueLateraleProjet } from "../../../assets";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";

const palette = {
  olive: "#4B6043",
  darkOlive: "#556E51",
  stone: "#F0F1EB",
  text: "#1F1F1F",
  white: "#FFFFFF",
  gradient: "linear-gradient(135deg, #4B6043, #556E51)",
};

export const Login = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoginStatus);
  const error = useSelector(selectLoginError);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = React.useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const handleLogin = (data) => dispatch(loginAsync(data));

  React.useEffect(() => {
    if (error) toast.error(error.message);
    return () => dispatch(clearLoginError());
  }, [error]);

  React.useEffect(() => {
    if (status === "succeeded") {
      toast.success("Connexion réussie");
      reset();
      navigate("/");
      dispatch(resetLoginStatus());
    }
  }, [status, navigate, reset, dispatch]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        backgroundImage: `url(${vueLateraleProjet})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            fontWeight: 900,
            background: palette.gradient,
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            letterSpacing: 1,
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          Bienvenue chez FINI PRO
        </Typography>
      </motion.div>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        sx={{ width: "100%", maxWidth: 950, alignItems: "center", justifyContent: "center" }}
      >
        {!isMobile && (
          <Box flex={1} display="flex" justifyContent="center">
            <motion.img
              src={login}
              alt="FINI PRO"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                width: "100%",
                maxWidth: 400,
                borderRadius: "1rem",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            />
          </Box>
        )}

        <motion.form
          onSubmit={handleSubmit(handleLogin)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            flex: 1,
            backgroundColor: "rgba(255,255,255,0.95)",
            padding: "3rem",
            borderRadius: "2rem",
            boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight={700} sx={{ color: palette.olive, mb: 2 }}>
            Connectez-vous à votre espace
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: palette.text, mb: 4, fontSize: 15, textAlign: "center" }}
          >
            Gérez vos services, demandes et livraisons facilement.
          </Typography>

          <Stack spacing={3} width="100%">
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: palette.olive }} />
                  </InputAdornment>
                ),
              }}
            />
            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}

            <TextField
              placeholder="Mot de passe"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="outlined"
              {...register("password", { required: "Le mot de passe est requis" })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: palette.olive }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={status === "pending"}
                sx={{
                  py: 1.6,
                  fontWeight: 700,
                  fontSize: 16,
                  borderRadius: 3,
                  background: palette.gradient,
                  boxShadow: "0 8px 24px rgba(75,96,67,0.4)",
                  "&:hover": { background: "linear-gradient(135deg, #556E51, #4B6043)" },
                }}
              >
                Se connecter
              </Button>
            </motion.div>
          </Stack>

          <Stack spacing={1.5} mt={4} textAlign="center">
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
        </motion.form>
      </Stack>
    </Box>
  );
};
