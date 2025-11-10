import React from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { axiosi } from "../../config/axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const palette = {
  bronze: "#AD946B",
  sand: "#ADA06B",
  clay: "#AD846B",
  text: "#2B2B2B",
  bg: "linear-gradient(180deg, #FAF9F7 0%, #F6F3EF 100%)",
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // ✅ Correction ici
      const response = await axiosi.post("/partenaire/contact", data);

      if (response.status === 201) {
        toast.success("Votre message a bien été envoyé !");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Échec de l'envoi. Merci de réessayer plus tard.");
    }
  };

  return (
    <Box
      sx={{
        background: palette.bg,
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        px: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        component={motion.form}
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          backgroundColor: "#fff",
          boxShadow: "0 10px 40px rgba(173,148,107,0.25)",
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          textAlign="center"
          sx={{
            color: palette.bronze,
            mb: 4,
            letterSpacing: 0.5,
          }}
        >
          Espace Pro – Devenir partenaire
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          color="rgba(43,43,43,0.75)"
          mb={4}
        >
          Vous êtes{" "}
          <strong style={{ color: palette.clay }}>
            architecte, promoteur, bureau d’études ou entreprise du bâtiment
          </strong>{" "}
          ? Collaborons pour construire ensemble des projets ambitieux.
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Nom / Société"
            {...register("company", { required: "Nom ou société requis" })}
            error={!!errors.company}
            helperText={errors.company?.message}
            fullWidth
          />

          <TextField
            label="Email professionnel"
            {...register("email", { required: "Email requis" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />

          <TextField label="Téléphone" {...register("phone")} fullWidth />

          <TextField
            label="Secteur d’activité"
            {...register("sector", { required: "Secteur requis" })}
            error={!!errors.sector}
            helperText={errors.sector?.message}
            fullWidth
          />

          <TextField
            label="Type de collaboration souhaitée (sous-traitance, co-traitance, etc.)"
            {...register("collaboration")}
            fullWidth
          />

          <TextField
            label="Zone d’intervention"
            {...register("zone")}
            fullWidth
          />

          <TextField
            label="Message / proposition"
            {...register("message", {
              required: "Veuillez préciser votre demande",
            })}
            error={!!errors.message}
            helperText={errors.message?.message}
            multiline
            rows={4}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              background: `linear-gradient(90deg, ${palette.bronze}, ${palette.clay})`,
              color: "#fff",
              py: 1.4,
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 2,
              mt: 2,
              boxShadow: "0 8px 22px rgba(173,148,107,0.4)",
              "&:hover": {
                background: `linear-gradient(90deg, ${palette.clay}, ${palette.sand})`,
                boxShadow: "0 10px 26px rgba(173,132,107,0.45)",
              },
            }}
          >
            Envoyer ma demande de partenariat
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};
