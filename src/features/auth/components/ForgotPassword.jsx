import React, { useEffect } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import {
  forgotPasswordAsync,
  selectForgotPasswordStatus,
  selectForgotPasswordError,
  selectForgotPasswordSuccessMessage,
  clearForgotPasswordError,
  clearForgotPasswordSuccessMessage,
  resetForgotPasswordStatus,
} from "../AuthSlice";
import { forgotPass } from "../../../assets";

// ✅ Original palette
const palette = {
  olive: "#4B6043",
  darkOlive: "#556E51",
  stone: "#F0F1EB",
  text: "#1F1F1F",
  white: "#FFFFFF",
};

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectForgotPasswordStatus);
  const error = useSelector(selectForgotPasswordError);
  const successMessage = useSelector(selectForgotPasswordSuccessMessage);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (error) toast.error(error?.message);
    return () => dispatch(clearForgotPasswordError());
  }, [error]);

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(successMessage?.message || "Email envoyé !");
      reset();
    }
    return () => dispatch(clearForgotPasswordSuccessMessage());
  }, [status]);

  useEffect(() => {
    return () => dispatch(resetForgotPasswordStatus());
  }, []);

  const handleForgotPassword = (data) => {
    dispatch(forgotPasswordAsync(data));
    reset();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        background: palette.stone,
      }}
    >
      <GlassPaper
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {!isMobile && (
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%", py: 6 }}
          >
            <motion.img
              src={forgotPass}
              alt="Forgot password"
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                width: "100%",
                maxWidth: 360,
                borderRadius: "15px",
                objectFit: "contain",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              }}
            />
          </Box>
        )}

        <Box flex={1} p={{ xs: 4, md: 6 }} sx={{ width: "100%", textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ color: palette.olive, mb: 2, letterSpacing: 0.5 }}
          >
            Mot de passe oublié ?
          </Typography>
          <Typography variant="body1" color={palette.text} mb={4} sx={{ lineHeight: 1.7 }}>
            Pas de panique ! Saisissez votre adresse e-mail ci-dessous, et nous vous enverrons
            un lien pour réinitialiser votre mot de passe.
          </Typography>

          <Stack component="form" spacing={3} onSubmit={handleSubmit(handleForgotPassword)}>
            <TextField
              fullWidth
              placeholder="Entrez votre adresse e-mail"
              {...register("email", {
                required: "Veuillez entrer un e-mail",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Adresse e-mail invalide",
                },
              })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
            />
            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <LoadingButton
                fullWidth
                type="submit"
                loading={status === "pending"}
                variant="contained"
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 3,
                  background: `linear-gradient(90deg, ${palette.olive}, ${palette.darkOlive})`,
                  color: palette.white,
                  boxShadow: "0 8px 20px rgba(75,96,67,0.35)",
                  "&:hover": {
                    background: `linear-gradient(90deg, ${palette.darkOlive}, ${palette.olive})`,
                    boxShadow: "0 10px 26px rgba(75,96,67,0.45)",
                  },
                }}
              >
                Envoyer le lien
              </LoadingButton>
            </motion.div>
          </Stack>

          <Typography
            component={Link}
            to="/login"
            sx={{
              display: "inline-block",
              mt: 3,
              color: palette.olive,
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            ← Retour à la connexion
          </Typography>
        </Box>
      </GlassPaper>
    </Box>
  );
};

const GlassPaper = (props) => (
  <motion.div
    {...props}
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      maxWidth: 900,
      width: "100%",
      borderRadius: "2rem",
      overflow: "hidden",
      backdropFilter: "blur(15px)",
      backgroundColor: "rgba(255,255,255,0.15)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
      zIndex: 1,
      position: "relative",
    }}
  >
    {props.children}
  </motion.div>
);
