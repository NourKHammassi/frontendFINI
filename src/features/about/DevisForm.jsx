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
import { useNavigate } from "react-router-dom";
import { axiosi } from "../../config/axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const palette = {
  bronze: "#AD946B",
  sand: "#ADA06B",
  clay: "#AD846B",
  text: "#2B2B2B",
  bg: "linear-gradient(180deg, #FAF9F7 0%, #F6F3EF 100%)",
};

export const DevisForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axiosi.post("/devis/sendDevis", data);
      if (response.status === 201) {
        toast.success("Votre demande de devis a bien été envoyée !");
        reset();
        navigate("/");
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
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ maxWidth: 900, width: "100%" }}>
        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            textAlign="center"
            sx={{
              color: palette.bronze,
              mb: 2,
              letterSpacing: 0.5,
            }}
          >
            Devis & Contact
          </Typography>

          <Typography
            variant="h5"
            textAlign="center"
            fontWeight={600}
            color={palette.text}
            mb={3}
          >
            Discutons de votre projet
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{ color: "rgba(43,43,43,0.75)", mb: 4, lineHeight: 1.8 }}
          >
            Un projet de <strong>rénovation</strong>, de <strong>construction</strong> ou d’
            <strong>aménagement</strong> ? <br />
            Contactez-nous dès aujourd’hui pour bénéficier de l’expertise{" "}
            <strong style={{ color: palette.clay }}>EHR</strong>. <br />
            Nos équipes étudient votre demande et vous proposent un{" "}
            <strong>devis gratuit et détaillé sous 48h</strong>.
          </Typography>

          {/* INFOS DE CONTACT — INLINE */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 6 }}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 6, color: palette.text }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon sx={{ color: palette.bronze }} />
              <Typography variant="body2">
                2 rue Perdonnet, 75010 Paris
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon sx={{ color: palette.bronze }} />
              <Typography variant="body2">
                contact@ehr-batiment.fr
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon sx={{ color: palette.bronze }} />
              <Typography variant="body2">
                01 84 00 00 00
              </Typography>
            </Stack>
          </Stack>

          <Typography
            variant="body1"
            textAlign="center"
            color="rgba(43,43,43,0.75)"
            mb={6}
          >
            Ou remplissez simplement notre formulaire en ligne, en précisant vos besoins,
            votre budget et vos délais. <br />
            Nous reviendrons vers vous rapidement pour en discuter ensemble.
          </Typography>
        </motion.div>

        {/* FORMULAIRE */}
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
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            textAlign="center"
            sx={{
              color: palette.bronze,
              mb: 4,
              letterSpacing: 0.5,
            }}
          >
            Formulaire de demande de devis
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Nom / Société"
              {...register("name", { required: "Nom ou société requis" })}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
            />

            <TextField
              label="Email"
              {...register("email", { required: "Email requis" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />

            <TextField label="Téléphone" {...register("phone")} fullWidth />

            <TextField
              label="Type de projet (ex : rénovation, extension, aménagement)"
              {...register("projectType", { required: "Type de projet requis" })}
              error={!!errors.projectType}
              helperText={errors.projectType?.message}
              fullWidth
            />

            <TextField
              label="Lieu des travaux"
              {...register("location", { required: "Lieu requis" })}
              error={!!errors.location}
              helperText={errors.location?.message}
              fullWidth
            />

            <TextField label="Budget estimé (€)" type="number" {...register("budget")} fullWidth />

            <TextField label="Délai souhaité" {...register("deadline")} fullWidth />

            <TextField
              label="Message ou détails du projet"
              {...register("message", { required: "Veuillez décrire votre projet" })}
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
              Envoyer ma demande de devis
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};
