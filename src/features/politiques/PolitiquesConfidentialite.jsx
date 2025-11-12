// PolitiquesConfidentialite.jsx
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const palette = {
  olive: "#4B6043",
  lightOlive: "#6F8C63",
  stone: "#F4F5F3",
  text: "#1F1F1F",
};

export const PolitiquesConfidentialite = () => {
  const sections = [
    {
      title: "📥 Collecte des données",
      content: `Chez FINI PRO, nous collectons uniquement les informations nécessaires à la bonne exécution de nos services : 
- Données d'identité (nom, prénom)
- Coordonnées (email, téléphone, adresse)
- Informations liées à vos demandes de devis, chantiers ou interventions

Ces données sont recueillies directement auprès de vous, avec votre consentement explicite, dans le cadre de nos prestations de rénovation et de finition.`,
    },
    {
      title: "🎯 Finalités du traitement",
      content: `Les données collectées sont utilisées pour :
- Établir et suivre vos devis, commandes et factures
- Planifier et assurer le suivi de nos interventions
- Répondre à vos demandes et questions
- Vous informer, avec votre accord, de nos actualités et offres

Nous n’utilisons jamais vos données à des fins publicitaires sans votre consentement.`,
    },
    {
      title: "🗄️ Durée de conservation",
      content: `Vos données sont conservées uniquement le temps nécessaire à la gestion de la relation client :
- 3 ans après la fin de la relation commerciale pour les prospects ou clients inactifs
- 10 ans pour les documents comptables (factures, chantiers validés)
Passé ces délais, vos données sont supprimées ou archivées en toute sécurité.`,
    },
    {
      title: "👤 Vos droits",
      content: `Conformément au RGPD, vous pouvez à tout moment exercer vos droits :
- Droit d’accès et de rectification de vos données
- Droit à l’effacement (« droit à l’oubli »)
- Droit d’opposition au traitement
- Droit à la limitation ou à la portabilité des données

Pour exercer vos droits, contactez-nous à :
📧 ${process.env.REACT_APP_BASE_MAIL}`,
    },
    {
      title: "🔐 Sécurité des données",
      content: `FINI PRO met en œuvre des mesures techniques et organisationnelles strictes afin de garantir la protection de vos informations personnelles :
- Accès restreint aux seules personnes habilitées
- Hébergement sécurisé des données
- Sauvegardes régulières et chiffrées
- Aucune diffusion non autorisée ou vente de données`,
    },
    {
      title: "⚠️ Transmission à des tiers",
      content: `Vos données peuvent être partagées uniquement avec nos prestataires techniques ou administratifs lorsque cela est nécessaire (hébergement, comptabilité, maintenance).
Aucune donnée n’est transmise à des tiers à des fins commerciales.`,
    },
    {
      title: "📩 Contact",
      content: `Pour toute question relative à la protection de vos données personnelles :
📧 ${process.env.REACT_APP_BASE_MAIL}
📮 ${process.env.REACT_APP_BASE_ADRESS}`,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 6 },
        bgcolor: palette.stone,
        color: palette.text,
        minHeight: "100vh",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: palette.olive,
            fontFamily: "Playfair Display, serif",
            mb: 1,
          }}
        >
          Politique de Confidentialité & Sécurité
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(31,31,31,0.7)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Chez FINI PRO, la protection de vos données personnelles est une priorité.
        </Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          backgroundColor: "#fff",
          boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
          maxWidth: "1100px",
          mx: "auto",
        }}
      >
        {sections.map((section, idx) => (
          <Box
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            sx={{ mb: 4 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: palette.olive,
                fontWeight: 700,
                mb: 1.2,
                fontFamily: "Playfair Display, serif",
              }}
            >
              {section.title}
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                lineHeight: 1.7,
                whiteSpace: "pre-line",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {section.content}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};
