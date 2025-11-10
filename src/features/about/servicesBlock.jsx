import React from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const palette = {
  bronze: "#AD946B",
  sand: "#ADA06B",
  clay: "#AD846B",
  text: "#2B2B2B",
  bg: "linear-gradient(180deg, #FAF9F7 0%, #F6F3EF 100%)",
};

const services = [
  {
    icon: "🏗️",
    title: "Travaux tous corps d’état",
    description: [
      "Réalisation complète de vos projets de construction ou rénovation, en coordonnant tous les corps de métier nécessaires.",
      "• Gros œuvre : maçonnerie, structure, fondations",
      "• Second œuvre : électricité, plomberie, menuiserie, peinture, plâtrerie",
      "• Finitions et aménagements : sols, murs, mobilier intégré, éclairage",
      "EHR garantit des chantiers réalisés dans les règles de l’art.",
    ],
  },
  {
    icon: "🧱",
    title: "Ingénierie & Pilotage",
    description: [
      "Nos ingénieurs assurent la coordination technique et administrative de vos projets.",
      "• Études techniques et de faisabilité",
      "• Plans d’exécution et modélisation",
      "• Gestion du planning et du budget",
      "• Suivi qualité et conformité",
      "Chaque détail compte, du concept à la livraison.",
    ],
  },
  {
    icon: "🌿",
    title: "Rénovation énergétique & durable",
    description: [
      "EHR s’engage pour un habitat plus responsable et performant.",
      "• Isolation thermique et phonique",
      "• Chauffage et ventilation éco-performants",
      "• Matériaux durables et écologiques",
      "Construire aujourd’hui, penser à demain.",
    ],
  },
];

export const ServicesBlock = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: palette.bg, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            fontWeight={900}
            textAlign="center"
            sx={{
              color: palette.text,
              mb: 1,
              letterSpacing: 0.4,
            }}
          >
            Nos Métiers
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              color: "rgba(43,43,43,0.7)",
              mb: 10,
            }}
          >
            Des savoir-faire complémentaires pour vos projets d’excellence
          </Typography>
        </motion.div>

        {/* Service Cards */}
        <Stack spacing={8}>
          {services.map((service, i) => {
            const reverse = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Grid
                  container
                  spacing={4}
                  direction={reverse ? "row-reverse" : "row"}
                  alignItems="center"
                >
                  {/* Left visual block */}
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        background: `linear-gradient(135deg, ${palette.bronze} 0%, ${palette.sand} 100%)`,
                        borderRadius: 4,
                        height: 260,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: 64,
                        boxShadow: "0 10px 30px rgba(173,148,107,0.25)",
                        transform: reverse ? "rotate(2deg)" : "rotate(-2deg)",
                      }}
                    >
                      {service.icon}
                    </Box>
                  </Grid>

                  {/* Text block */}
                  <Grid item xs={12} md={7}>
                    <Paper
                      component={motion.div}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      }}
                      sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: 3,
                        backgroundColor: "#fff",
                        border: `1px solid ${palette.bronze}33`,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={800}
                        gutterBottom
                        sx={{
                          color: palette.bronze,
                          mb: 2,
                          letterSpacing: 0.3,
                        }}
                      >
                        {service.title}
                      </Typography>
                      {service.description.map((d, j) => (
                        <Typography
                          key={j}
                          variant="body1"
                          sx={{
                            color: "rgba(43,43,43,0.85)",
                            mb: 1,
                            lineHeight: 1.6,
                          }}
                        >
                          {d}
                        </Typography>
                      ))}
                    </Paper>
                  </Grid>
                </Grid>
              </motion.div>
            );
          })}
        </Stack>

        {/* CTA */}
        <Box textAlign="center" mt={12}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/demanderDevis")}
              sx={{
                background: `linear-gradient(90deg, ${palette.bronze}, ${palette.clay})`,
                color: "#fff",
                px: 6,
                py: 1.6,
                fontWeight: 700,
                borderRadius: 2,
                fontSize: 16,
                boxShadow: "0 8px 22px rgba(173,148,107,0.4)",
                "&:hover": {
                  background: `linear-gradient(90deg, ${palette.clay}, ${palette.sand})`,
                  boxShadow: "0 10px 26px rgba(173,132,107,0.45)",
                },
              }}
            >
              Demander un devis
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
