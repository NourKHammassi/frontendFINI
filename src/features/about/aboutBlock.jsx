// AboutBlock.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { discuPlan, mesureBois, peintureOrange, interieuSol } from "../../assets";

const palette = {
  primary: "#4B6043",
  text: "#1F1F1F",
  overlay: "rgba(75,96,67,0.25)", // warmer olive overlay
};

const images = [
  { src: discuPlan, title: "Études & Plans" },
  { src: mesureBois, title: "Mesures Précises" },
  { src: peintureOrange, title: "Peinture & Finitions" },
  { src: interieuSol, title: "Aménagement Intérieur" },
];

export const AboutBlock = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, backgroundColor: "#ECEFE6" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight={900}
          color={palette.primary}
          textAlign="center"
          mb={6}
        >
          À propos de FINI PRO
        </Typography>

        {/* Masonry-style collage */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gridAutoRows: { xs: 180, sm: 200, md: 220 },
            gap: 3,
          }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              <Box
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)", // subtle shadow on all images
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: palette.overlay,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    p: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="#fff"
                    fontWeight={700}
                    textAlign="center"
                  >
                    {img.title}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Vision Text */}
        <Box sx={{ mt: 8, textAlign: "center", maxWidth: 720, mx: "auto" }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color={palette.primary}
            mb={3}
          >
            Notre vision
          </Typography>
          <Typography
            variant="body1"
            color={palette.text}
            sx={{ lineHeight: 1.7 }}
          >
            Chaque projet est traité avec précision et passion. Nous transformons vos espaces en véritables vitrines de notre savoir-faire, avec un accompagnement sur-mesure à chaque étape.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
