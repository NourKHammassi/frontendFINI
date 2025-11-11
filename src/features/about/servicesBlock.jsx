// ServicesBlock.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const palette = {
  darkGray: "#2B2B2B",
  mediumGray: "#555555",
  lightGray: "#F4F5F7",
  white: "#FFFFFF",
  accent: "#4B6043",
};

const services = [
  {
    icon: "🛠️",
    title: "Travaux de finition",
    description: "Peinture, plâtrerie, sols et murs, nettoyage et remise en état. Intervention clé en main, finitions précises et durables.",
  },
  {
    icon: "🧱",
    title: "Plâtrerie & Cloisons",
    description: "Faux plafonds, doublages, réfection des murs et enduits. Solutions modulables pour tous types de projets.",
  },
  {
    icon: "🎨",
    title: "Peinture & Décoration",
    description: "Application décorative et façades, chantiers neufs et rénovations. Couleurs et finitions harmonisées pour vos espaces.",
  },
];

export const ServicesBlock = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: palette.lightGray, py: { xs: 8, md: 12 }, overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={10}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography variant="h3" fontWeight={900} color={palette.darkGray}>
              Nos Métiers
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: palette.mediumGray, mt: 2 }}
            >
              Des savoir-faire complémentaires pour vos projets d’excellence
            </Typography>
          </motion.div>
        </Box>

        {/* Creative diagonal cards */}
        <Box
          sx={{
            display: "flex",
            gap: 6,
            overflowX: { xs: "auto", md: "visible" },
            px: { xs: 2, md: 0 },
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              style={{
                minWidth: 300,
                maxWidth: 360,
                flex: "0 0 auto",
                transform: i % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: palette.white,
                  borderRadius: 3,
                  px: 4,
                  py: 6,
                  textAlign: "center",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <Box
                  sx={{
                    fontSize: 60,
                    mb: 3,
                    color: palette.accent,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h5" fontWeight={700} mb={2} color={palette.darkGray}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color={palette.mediumGray} lineHeight={1.6}>
                  {service.description}
                </Typography>
                {/* Decorative floating circle */}
                <Box
                  sx={{
                    position: "absolute",
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: `${palette.accent}22`,
                    top: -30,
                    right: -30,
                    zIndex: 0,
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* CTA */}
        <Box textAlign="center" mt={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
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
                "&:hover": { backgroundColor: palette.darkGray, boxShadow: "0 12px 36px rgba(43,43,43,0.35)" },
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
