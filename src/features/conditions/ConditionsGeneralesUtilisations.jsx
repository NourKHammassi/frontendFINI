import React from "react";
import { Box, Typography, Paper, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";

const palette = {
  olive: "#4B6043",
  darkOlive: "#556E51",
  stone: "#F0F1EB",
  white: "#FFFFFF",
  text: "#1F1F1F",
  medium: "#555",
};

export const ConditionsGeneralesUtilisations = () => {
  const cguSections = [
    {
      title: "Article 1 – Objet",
      content: `Les présentes CGU définissent les modalités d’accès et d’utilisation du site www.finipro.fr (ci-après “le Site”), édité par FINI PRO – RAGUED Saif Allah.`,
    },
    {
      title: "Article 2 – Acceptation des CGU",
      content: `L’utilisation du Site implique l’acceptation intégrale des présentes CGU. L’utilisateur s’engage à respecter la législation française et à utiliser le Site de manière responsable.`,
    },
    {
      title: "Article 3 – Accès au Site",
      content: `Le Site est accessible 7j/7, 24h/24, sauf maintenance ou force majeure. FINI PRO n’est pas responsable d’interruptions techniques, pertes de données ou bugs.`,
    },
    {
      title: "Article 4 – Propriété intellectuelle",
      content: `Tous les éléments du Site (textes, logos, images, bases de données, codes) sont la propriété de FINI PRO. Toute reproduction ou utilisation sans autorisation est interdite.`,
    },
    {
      title: "Article 5 – Données personnelles",
      content: `Les données personnelles collectées via le Site sont traitées conformément au RGPD. Vous pouvez exercer vos droits (accès, rectification, suppression, opposition) à :
📧 ${process.env.REACT_APP_EMAIL}`,
    },
    {
      title: "Article 6 – Responsabilité",
      content: `FINI PRO n’est pas responsable des dommages directs ou indirects résultant de l’utilisation ou de l’inaccessibilité du Site.`,
    },
    {
      title: "Article 7 – Modification des CGU",
      content: `FINI PRO peut modifier les CGU à tout moment. La version affichée sur le Site est celle en vigueur.`,
    },
    {
      title: "Article 8 – Droit applicable",
      content: `Les CGU sont régies par le droit français. Tout litige relève du Tribunal judiciaire de Créteil.`,
    },
  ];

  const mentionsLegales = [
    {
      title: "Éditeur du site",
      content: `FINI PRO – RAGUED Saif Allah  
Forme : Entrepreneur Individuel  
SIREN : 944 924 273  
Adresse : 6 Place Robert Belvaux, 94170 Le Perreux-sur-Marne  
Activité : Travaux de finition (APE 43.39Z)`,
    },
    {
      title: "Hébergeur",
      content: `Hostinger International Ltd.  
Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre  
🌐 https://www.hostinger.com`,
    },
    {
      title: "Contact",
      content: `📧 ${process.env.REACT_APP_EMAIL}  
📞 ${process.env.REACT_APP_PHONE_NUMBER}`,
    },
  ];

  return (
    <Box sx={{ width: "100%", py: 10, backgroundColor: palette.stone }}>
      <Container maxWidth="lg">
        {/* CGU */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight={900}
            color={palette.text}
            mb={6}
          >
            Conditions Générales d’Utilisation (CGU)
          </Typography>

          <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, backgroundColor: palette.white }}>
            {cguSections.map((section, i) => (
              <Box key={i} mb={4}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color={palette.olive}
                  mb={1}
                >
                  {section.title}
                </Typography>
                <Typography variant="body1" color={palette.text} sx={{ lineHeight: 1.7, whiteSpace: "pre-line" }}>
                  {section.content}
                </Typography>
                {i !== cguSections.length - 1 && <Divider sx={{ my: 3 }} />}
              </Box>
            ))}
          </Paper>
        </motion.div>

        {/* Mentions légales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight={900}
            color={palette.text}
            mt={10}
            mb={6}
          >
            Mentions Légales
          </Typography>

          <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, backgroundColor: palette.white }}>
            {mentionsLegales.map((section, i) => (
              <Box key={i} mb={4}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color={palette.olive}
                  mb={1}
                >
                  {section.title}
                </Typography>
                <Typography variant="body1" color={palette.text} sx={{ lineHeight: 1.7, whiteSpace: "pre-line" }}>
                  {section.content}
                </Typography>
                {i !== mentionsLegales.length - 1 && <Divider sx={{ my: 3 }} />}
              </Box>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};
