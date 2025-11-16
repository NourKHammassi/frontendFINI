import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
// import { suiviChantierrr } from "../../assets";

const palette = {
  bronze: "#AD946B",
  sand: "#ADA06B",
  clay: "#AD846B",
  text: "#2B2B2B",
  bg: "linear-gradient(180deg, #FAF9F7 0%, #F6F3EF 100%)",
  paper: "#FFFFFF",
};

export const BlogsBlock = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const articles = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      text: `EHR vous accompagne dans vos démarches d’amélioration énergétique. 
      Découvrez comment isoler, ventiler et chauffer efficacement votre logement 
      tout en profitant des aides disponibles.`,
      icon: "🧩",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      text: `Confier vos travaux à une entreprise comme EHR, c’est bénéficier d’un interlocuteur unique, 
      d’une coordination fluide et d’un résultat sans surprise. 
      Un gain de temps, d’argent et de sérénité.`,
      icon: "🛠️",
    },
    {
      id: 3,
      // image:
      //   suiviChantierrr,
      text: `Plongez dans les coulisses de nos projets : avant / après, coulées de béton, 
      finitions design, innovations techniques… 
      Chaque réalisation raconte une histoire, celle de la transformation réussie d’un espace.`,
      icon: "🏗️",
    },
  ];

  return (
    <Box
      sx={{
        background: palette.bg,
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              fontWeight: 800,
              color: palette.bronze,
              mb: 1,
              letterSpacing: 0.5,
            }}
          >
            Blog & Actualités
          </Typography>
          <Typography
            variant="h6"
            color="rgba(43,43,43,0.7)"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Suivez nos actualités, découvrez nos conseils de pros et restez informés
            des dernières tendances du bâtiment.
          </Typography>
        </Box>

        {/* Articles grid */}
        <Grid container spacing={5}>
          {articles.map((article, i) => (
            <Grid item xs={12} md={4} key={article.id}>
              <Card
                component={motion.div}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 10px 35px rgba(173,148,107,0.25)",
                  border: `1px solid ${palette.bronze}33`,
                  backgroundColor: palette.paper,
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 45px rgba(173,148,107,0.35)",
                  },
                }}
              >
                <CardMedia
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  image={article.image}
                  sx={{ height: 220, objectFit: "cover" }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                      color: palette.clay,
                      mb: 1.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span style={{ fontSize: "1.6rem" }}>{article.icon}</span>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="rgba(43,43,43,0.75)"
                    sx={{ mb: 2 }}
                  >
                    {article.text}
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{
            mt: 10,
            textAlign: "center",
            background: `linear-gradient(135deg, ${palette.bronze} 0%, ${palette.sand} 90%)`,
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            boxShadow: "0 10px 30px rgba(173,148,107,0.3)",
            color: "#fff",
          }}
        >
          <Typography variant="h5" fontWeight={700} mb={1}>
            📰 Restez informés
          </Typography>
          <Typography variant="body1" mb={2}>
            Abonnez-vous à notre newsletter pour ne rien manquer de nos conseils, nos
            innovations et nos actualités chantier.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
