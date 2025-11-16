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
// import { login } from "../../../assets";

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
    if (loggedInUser && !loggedInUser?.isVerified) {
      navigate("/verify-otp");
    } else if (loggedInUser) {
      navigate("/");
    }
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
        }}
      >
        {/* Left image */}
        {!isMobile && (
          <Box flex={1} display="flex" justifyContent="center" alignItems="center">
            <img
              // src={login}
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
        <PaperMotion onSubmit={handleSubmit(handleSignup)}>
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
            />
            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}

            <TextField
              type="password"
              placeholder="Mot de passe"
              fullWidth
              variant="outlined"
              {...register("password", { required: "Mot de passe requis" })}
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
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${palette.olive}, ${palette.darkOlive})`,
                  boxShadow: "0 6px 16px rgba(75,96,67,0.4)",
                  "&:hover": {
                    background: `linear-gradient(90deg, ${palette.darkOlive}, ${palette.olive})`,
                    boxShadow: "0 8px 22px rgba(75,96,67,0.45)",
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
        </PaperMotion>
      </Stack>
    </Box>
  );
};

// ✅ Motion-form component
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
