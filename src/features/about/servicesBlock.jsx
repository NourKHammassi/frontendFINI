// ServicesBlock.jsx
import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  peintureOrange,
  planTravail,
  trorroir
} from "../../assets"; // new unused images

const palette = {
  darkGray: "#2B2B2B",
  mediumGray: "#555555",
  lightGray: "#F4F5F7",
  white: "#FFFFFF",
  accent: "#4B6043",
};

const services = [
  {
    title: "Travaux de finition",
    description:
      "Peinture, plâtrerie, sols et murs, nettoyage et remise en état. Intervention clé en main, finitions précises et durables.",
    image: peintureOrange,
  },
  {
    title: "Planification & Aménagement",
    description:
      "Conception sur mesure, planification et suivi des travaux pour un projet maîtrisé et efficace.",
    image: planTravail,
  },
  {
    title: "Revêtements & Sols",
    description:
      "Pose de parquet, carrelage, moquette et finitions précises pour des espaces esthétiques et durables.",
    image: trorroir,
  },
];

export const ServicesBlock = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: palette.lightGray, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={10}>
          <Typography variant="h3" fontWeight={900} color={palette.darkGray}>
            Nos Métiers
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: palette.mediumGray, mt: 2 }}
          >
            Des savoir-faire complémentaires pour vos projets d’excellence
          </Typography>
        </Box>

        {/* Image cards */}
        <Grid container spacing={6}>
          {services.map((service, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                    position: "relative",
                    cursor: "pointer",
                    backgroundColor: palette.white,
                  }}
                >
                  <Box
                    sx={{
                      height: 220,
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.4s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  />
                  <Box sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      mb={2}
                      color={palette.darkGray}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color={palette.mediumGray}
                      lineHeight={1.6}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                  {/* Modern accent corner */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: 80,
                      height: 80,
                      backgroundColor: `${palette.accent}33`,
                      borderRadius: "50%",
                      top: -20,
                      right: -20,
                      zIndex: 0,
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box textAlign="center" mt={12}>
          <Button
            variant="contained"
            onClick={() => navigate("/demanderDevis")}
            sx={{
              backgroundColor: palette.accent,
              color: palette.white,
              px: 6,
              py: 1.6,
              fontWeight: 700,
              borderRadius: 3,
              fontSize: 16,
              boxShadow: "0 10px 30px rgba(75,96,67,0.3)",
              "&:hover": {
                backgroundColor: palette.darkGray,
                boxShadow: "0 12px 36px rgba(43,43,43,0.35)",
              },
            }}
          >
            Demander un devis
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
