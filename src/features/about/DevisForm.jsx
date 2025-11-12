import React from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosi } from "../../config/axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const palette = {
  primary: "#2E4F2E", // dark green
  secondary: "#4B7A4B", // olive green
  accent: "#8AA78F", // light green
  bg: "#F7F9F6",
  text: "#1F1F1F",
  textLight: "rgba(31,31,31,0.7)",
  white: "#FFFFFF",
};

export const DevisForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { consent: false } });

  const onSubmit = async (data) => {
    if (!data.consent) {
      toast.error("Vous devez accepter le RGPD pour envoyer la demande.");
      return;
    }
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
        py: { xs: 8, md: 10 },
        px: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 900, width: "100%" }}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            textAlign="center"
            sx={{ color: palette.primary, mb: 2, letterSpacing: 1 }}
          >
            📞 Contactez FINI PRO pour un devis personnalisé
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{ color: palette.textLight, mb: 3, lineHeight: 1.8 }}
          >
            Chez <strong>FINI PRO</strong>, nous combinons expertise, réactivité et accompagnement sur-mesure.<br />
            Que vous planifiez des travaux de rénovation, de peinture, de revêtements ou d’aménagement, notre équipe vous conseille et vous guide à chaque étape.
          </Typography>

          <Typography
            variant="h5"
            fontWeight={600}
            textAlign="center"
            sx={{ color: palette.secondary, mb: 3 }}
          >
            🛠️ Demande de devis ou informations
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{ color: palette.textLight, mb: 4, lineHeight: 1.6 }}
          >
            Pour toute demande concernant :<br />
            • Travaux de peinture intérieure ou extérieure<br />
            • Pose de revêtements (sols, murs, carrelage, parquet, etc.)<br />
            • Plâtrerie, aménagement ou rénovation globale<br />
            • Services complémentaires (nettoyage de fin de chantier, petits travaux)<br />
            Merci d’utiliser le formulaire ci-dessous pour que nous puissions vous répondre rapidement et précisément.
          </Typography>


        </motion.div>

        {/* FORM */}
        <Paper
          component={motion.form}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            p: 6,
            borderRadius: 4,
            backgroundColor: palette.white,
            boxShadow: "0 12px 36px rgba(0,0,0,0.12)",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          <Stack spacing={3}>
            <TextField
              label="Nom et prénom / Société"
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
            <TextField
              label="Téléphone"
              {...register("phone", { required: "Téléphone requis" })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Type de demande</InputLabel>
              <Controller
                name="typeOfRequest"
                control={control}
                rules={{ required: "Type de demande requis" }}
                render={({ field }) => (
                  <Select {...field} label="Type de demande" error={!!errors.typeOfRequest}>
                    <MenuItem value="peinture">Travaux de peinture</MenuItem>
                    <MenuItem value="revetement">Revêtements sols et murs</MenuItem>
                    <MenuItem value="platrerie">Plâtrerie / Aménagement</MenuItem>
                    <MenuItem value="nettoyage">Nettoyage de fin de chantier</MenuItem>
                    <MenuItem value="autre">Autre</MenuItem>
                  </Select>
                )}
              />
              {errors.typeOfRequest && (
                <Typography variant="caption" color="error">
                  {errors.typeOfRequest.message}
                </Typography>
              )}
            </FormControl>

            <TextField
              label="Objet de la demande"
              {...register("subject", { required: "Objet requis" })}
              error={!!errors.subject}
              helperText={errors.subject?.message}
              fullWidth
            />

            <TextField
              label="Description détaillée"
              {...register("description", { required: "Veuillez décrire votre projet" })}
              error={!!errors.description}
              helperText={errors.description?.message}
              multiline
              rows={4}
              fullWidth
            />

            <FormControlLabel
              control={
                <Controller
                  name="consent"
                  control={control}
                  render={({ field }) => <Checkbox {...field} />}
                />
              }
              label="✅ J’accepte que mes données soient utilisées uniquement pour le traitement de ma demande, conformément à la politique de confidentialité de FINI PRO."
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                background: `linear-gradient(90deg, ${palette.primary}, ${palette.secondary})`,
                color: palette.white,
                py: 1.5,
                fontWeight: 700,
                fontSize: 16,
                borderRadius: 3,
                mt: 2,
                "&:hover": { background: `linear-gradient(90deg, ${palette.secondary}, ${palette.accent})` },
              }}
            >
              Envoyer ma demande
            </Button>

            <Typography
              variant="body2"
              textAlign="center"
              sx={{ color: palette.textLight, mb: 6, fontStyle: "italic" }}
            >
              ⚠️ Toute intervention ne peut être planifiée qu’après validation formelle du devis envoyé par FINI PRO.
            </Typography>
          </Stack>

        </Paper>
        {/* <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: palette.textLight, mt: 4 }}
        >
          🚀 FINI PRO, votre partenaire finition et rénovation partout en France !<br />
          Nous intervenons dans toute la France pour répondre à vos besoins avec professionnalisme et rapidité.
        </Typography> */}


        <Typography
          variant="subtitle1"
          fontWeight={600}
          textAlign="center"
          sx={{ color: palette.primary, mb: 2 }}
        >
          🏢 Coordonnées FINI PRO
        </Typography>
        <Typography variant="body2" textAlign="center" sx={{ color: palette.textLight, mb: 6 }}>
          Raison sociale : RAGUED Saif Allah (EI) – FINI PRO<br />
          Adresse : {process.env.REACT_APP_BASE_ADRESS}<br />
          Téléphone : {process.env.REACT_APP_BASE_NUMBER}<br />
          Email : {process.env.REACT_APP_BASE_MAIL}<br />
          RCS : 944 924 273 R.C.S. Créteil
        </Typography>
      </Box>
    </Box>
  );
};
