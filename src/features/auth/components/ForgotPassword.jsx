import React, { useEffect } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  useMediaQuery,
  useTheme,
  Paper,
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
// import { forgot } from "../../../assets";

const palette = {
  bronze: "#AD946B",
  clay: "#B47E5D",
  sand: "#FAF9F7",
  blue: "#0F3F80",
  text: "#2B2B2B",
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
        background: `linear-gradient(180deg, ${palette.sand} 0%, #F4F1EC 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
      }}
    >
      <Paper
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          maxWidth: 900,
          width: "100%",
          borderRadius: 4,
          boxShadow: "0 10px 40px rgba(173,148,107,0.25)",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        {/* Image */}
        {!isMobile && (
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              background: `linear-gradient(135deg, ${palette.bronze}22, ${palette.clay}11)`,
              height: "100%",
              py: 6,
            }}
          >
            <img
              // src={forgot}
              alt="Livreur triste"
              style={{
                width: "100%",
                maxWidth: 360,
                borderRadius: "15px",
                objectFit: "contain",
              }}
            />
          </Box>
        )}

        {/* Formulaire */}
        <Box
          flex={1}
          p={{ xs: 4, md: 6 }}
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              color: palette.bronze,
              mb: 2,
              letterSpacing: 0.5,
            }}
          >
            Mot de passe oublié ?
          </Typography>
          <Typography
            variant="body1"
            color="rgba(43,43,43,0.7)"
            mb={4}
            sx={{ lineHeight: 1.7 }}
          >
            Pas de panique ! Saisissez votre adresse e-mail ci-dessous, et nous
            vous enverrons un lien pour réinitialiser votre mot de passe.
          </Typography>

          <Stack
            component="form"
            spacing={3}
            onSubmit={handleSubmit(handleForgotPassword)}
          >
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
            />
            {errors.email && (
              <FormHelperText error>{errors.email.message}</FormHelperText>
            )}

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <LoadingButton
                fullWidth
                type="submit"
                loading={status === "pending"}
                variant="contained"
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  background: `linear-gradient(90deg, ${palette.bronze}, ${palette.clay})`,
                  color: "white",
                  borderRadius: 2,
                  boxShadow: "0 8px 22px rgba(173,148,107,0.4)",
                  "&:hover": {
                    background: `linear-gradient(90deg, ${palette.clay}, ${palette.bronze})`,
                    boxShadow: "0 10px 26px rgba(173,132,107,0.45)",
                  },
                }}
              >
                Envoyer le lien de réinitialisation
              </LoadingButton>
            </motion.div>
          </Stack>

          <Typography
            component={Link}
            to="/login"
            sx={{
              display: "inline-block",
              mt: 3,
              color: palette.bronze,
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            ← Retour à la connexion
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
