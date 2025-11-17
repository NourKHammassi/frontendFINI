import React, { useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import {
  selectLoggedInUser,
  signupAsync,
  selectSignupStatus,
  selectSignupError,
  clearSignupError,
  resetSignupStatus,
} from "../AuthSlice";
import { toast } from "react-toastify";
import { signup, vueLateraleProjet } from "../../../assets";

const palette = {
  olive: "#4B6043",
  darkOlive: "#556E51",
  stone: "#F0F1EB",
  text: "#1F1F1F",
  white: "#FFFFFF",
};

export const Signup = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectSignupStatus);
  const error = useSelector(selectSignupError);
  const loggedInUser = useSelector(selectLoggedInUser);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (loggedInUser && !loggedInUser?.isVerified) navigate("/verify-otp");
    else if (loggedInUser) navigate("/");
  }, [loggedInUser]);

  useEffect(() => {
    if (error) toast.error(error.message);
    return () => dispatch(clearSignupError());
  }, [error]);

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success("Bienvenue ! Vérifiez votre e-mail !");
      reset();
      dispatch(resetSignupStatus());
    }
  }, [status]);

  const handleSignup = (data) => {
    const cred = { ...data };
    delete cred.confirmPassword;
    dispatch(signupAsync(cred));
  };

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
      <Box
        sx={{
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      />
      {/* Title */}
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
          zIndex: 1,
          position: "relative",
        }}
      >
        Créez votre compte FINI PRO
      </Typography>

      {/* Main container */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        sx={{
          width: "100%",
          maxWidth: 950,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        {!isMobile && (
          <Box flex={1} display="flex" justifyContent="center" alignItems="center">
            <motion.img
              src={signup}
              alt="FINI PRO"
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                width: "100%",
                maxWidth: 380,
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              }}
            />
          </Box>
        )}

        <GlassForm onSubmit={handleSubmit(handleSignup)}>
          <Typography variant="h5" fontWeight={700} sx={{ color: palette.olive, mb: 2 }}>
            Inscrivez-vous gratuitement
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: palette.text, mb: 3, fontSize: 15, textAlign: "center" }}
          >
            Créez un compte pour accéder à nos services FINI PRO.
          </Typography>

          <Stack spacing={2.5} width="100%">
            <TextField
              placeholder="Nom d'utilisateur"
              fullWidth
              variant="outlined"
              {...register("name", { required: "Nom d'utilisateur requis" })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
            />
            {errors.name && <FormHelperText error>{errors.name.message}</FormHelperText>}

            <TextField
              placeholder="Email professionnel"
              fullWidth
              variant="outlined"
              {...register("email", {
                required: "Email requis",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email invalide",
                },
              })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
            />
            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}

            <TextField
              type="password"
              placeholder="Mot de passe"
              fullWidth
              variant="outlined"
              {...register("password", { required: "Mot de passe requis" })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
            />
            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}

            <TextField
              type="password"
              placeholder="Confirmer le mot de passe"
              fullWidth
              variant="outlined"
              {...register("confirmPassword", {
                required: "Confirmation requise",
                validate: (value) =>
                  value === getValues("password") || "Les mots de passe ne correspondent pas",
              })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
            />
            {errors.confirmPassword && (
              <FormHelperText error>{errors.confirmPassword.message}</FormHelperText>
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
                  borderRadius: 3,
                  background: `linear-gradient(90deg, ${palette.olive}, ${palette.darkOlive})`,
                  boxShadow: "0 8px 18px rgba(75,96,67,0.4)",
                  "&:hover": {
                    background: `linear-gradient(90deg, ${palette.darkOlive}, ${palette.olive})`,
                    boxShadow: "0 10px 22px rgba(75,96,67,0.45)",
                  },
                }}
              >
                S’inscrire
              </Button>
            </motion.div>
          </Stack>

          <Stack spacing={1.5} mt={3} textAlign="center">
            <Typography
              component={Link}
              to="/login"
              sx={{
                textDecoration: "none",
                color: palette.darkOlive,
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Déjà membre ? Connectez-vous
            </Typography>
          </Stack>
        </GlassForm>
      </Stack>
    </Box>
  );
};

// ✅ Glassmorphism Form
const GlassForm = ({ children, ...props }) => (
  <motion.form
    {...props}
    style={{
      flex: 1,
      padding: "2.5rem",
      borderRadius: "1.8rem",
      backdropFilter: "blur(15px)",
      backgroundColor: "rgba(255,255,255,0.15)",
      boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
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
