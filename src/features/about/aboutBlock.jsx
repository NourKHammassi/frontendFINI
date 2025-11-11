// AboutBlock.jsx
import React from "react";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { WorkspacePremium, Verified, Schedule, Brush } from "@mui/icons-material";
import { construction } from "../../assets";

const palette = {
  primary: "#4B6043",
  accent: "#2C3A2A",
  stone: "#ECEFE6", // match navbar/footer
  text: "#1F1F1F",
  bg: "#ECEFE6",
};

export const AboutBlock = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
  };

  const cards = [
    { icon: <WorkspacePremium />, title: "Outils modernes & matériaux certifiés" },
    { icon: <Verified />, title: "Suivi de chantier transparent" },
    { icon: <Schedule />, title: "Prix ajustés à vos besoins réels" },
    { icon: <Brush />, title: "Haut niveau de finition" },
  ];

  return (
    <Box sx={{ backgroundColor: palette.bg, py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ mb: 6, textAlign: "center", px: { xs: 2, md: 6 } }}
        >
          <Typography variant="h3" fontWeight={800} sx={{ color: palette.primary, mb: 2, fontFamily: "Playfair Display, serif" }}>
            À propos de FINI PRO
          </Typography>
          <Typography variant="h6" sx={{ color: palette.text, maxWidth: 680, mx: "auto", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>
            Entreprise de travaux de finition fondée par <strong>Saif Allah RAGUED</strong>, artisan passionné du bâtiment depuis plus de 10 ans. Nous transformons vos espaces avec précision, rigueur et sens du détail.
          </Typography>
        </Box>

        {/* Image + text */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              sx={{
                height: 320,
                borderRadius: 3,
                backgroundImage: `url(${construction})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: palette.primary, fontFamily: "Playfair Display, serif" }}>
                Qui sommes-nous ?
              </Typography>
              <Typography variant="body1" sx={{ color: palette.text, fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
                Nous intervenons sur des chantiers de particuliers et professionnels, avec trois promesses : respect des délais, suivi clair et finition irréprochable. Chaque projet est une vitrine de notre savoir-faire.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Mission cards */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: palette.primary, mb: 4, textAlign: "center", fontFamily: "Playfair Display, serif" }}>
            Notre mission
          </Typography>
          <Grid container spacing={3}>
            {cards.map((card, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Paper
                  component={motion.div}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    boxShadow: "0 3px 15px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-4px)", boxShadow: "0 6px 20px rgba(0,0,0,0.12)" },
                  }}
                >
                  <Box sx={{ fontSize: 34, mb: 1.5, color: palette.primary, display: "flex", justifyContent: "center" }}>
                    {card.icon}
                  </Box>
                  <Typography variant="subtitle1" sx={{ color: palette.text, fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
                    {card.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Vision */}
        <Box sx={{ mt: 8, textAlign: "center", maxWidth: 720, mx: "auto" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: palette.primary, mb: 2, fontFamily: "Playfair Display, serif" }}>
            Notre vision
          </Typography>
          <Typography variant="body1" sx={{ color: palette.text, lineHeight: 1.7, fontFamily: "Inter, sans-serif" }}>
            Parce qu’un projet réussi passe par une finition impeccable, nous faisons de chaque chantier une vitrine de notre savoir-faire. Notre approche repose sur l’écoute, la maîtrise technique et un accompagnement personnalisé.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
