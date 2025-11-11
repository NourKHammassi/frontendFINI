import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../features/navigation/components/Navbar";
import { Footer } from "../features/footer/Footer";
import PaletteIcon from "@mui/icons-material/Palette";
import RoofingIcon from "@mui/icons-material/Roofing";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

// 🪶 Refined neutral palette (clean, architectural)
const palette = {
  olive: "#4E5B45",
  oliveDark: "#3F4A38",
  stone: "#F2F3EE",
  white: "#FFFFFF",
  text: "#1F1F1F",
  medium: "#5F5F5F",
  lightBorder: "#E2E3DE",
};

export const HomePage = () => {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(0);

  const services = [
    {
      icon: <PaletteIcon sx={{ fontSize: 42, color: palette.olive }} />,
      title: "Peinture intérieure & extérieure",
      text: "Applications décoratives, techniques ou écologiques pour une finition impeccable.",
    },
    {
      icon: <RoofingIcon sx={{ fontSize: 42, color: palette.olive }} />,
      title: "Revêtements & sols",
      text: "Pose de parquet, carrelage, moquette, PVC et finitions murales sur mesure.",
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 42, color: palette.olive }} />,
      title: "Plâtrerie & aménagements",
      text: "Cloisons, faux plafonds et isolation pour structurer et embellir vos espaces.",
    },
    {
      icon: <CleaningServicesIcon sx={{ fontSize: 42, color: palette.olive }} />,
      title: "Nettoyage de fin de chantier",
      text: "Nettoyage complet, évacuation des déchets et remise en état après travaux.",
    },
  ];

  const projects = [
    {
      img: "/images/project1.jpg",
      title: "Appartement rénové à Paris 16ᵉ",
      desc: "Rénovation complète avec finitions contemporaines et matériaux nobles.",
    },
    {
      img: "/images/project2.jpg",
      title: "Peinture écologique dans des bureaux",
      desc: "Tons naturels et produits à faible impact environnemental.",
    },
    {
      img: "/images/project3.jpg",
      title: "Espace d’accueil d’entreprise",
      desc: "Ambiance sobre et élégante grâce à des textures murales harmonieuses.",
    },
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <>
      <Navbar />

      {/* INTRO SECTION */}
      <Box
        sx={{
          backgroundColor: palette.stone,
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            fontWeight={900}
            color={palette.text}
            mb={2}
            sx={{ fontSize: { xs: 36, md: 48 } }}
          >
            Des finitions qui font la différence
          </Typography>
          <Typography
            variant="h6"
            color={palette.medium}
            sx={{ maxWidth: 600, mx: "auto", lineHeight: 1.6 }}
          >
            FINI PRO réalise vos travaux de finition et rénovation intérieure avec
            précision, durabilité et sens du détail.
          </Typography>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box sx={{ backgroundColor: palette.white, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight={900}
            textAlign="center"
            mb={{ xs: 6, md: 8 }}
            color={palette.text}
          >
            Nos Métiers
          </Typography>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {services.map((s, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      border: `1px solid ${palette.lightBorder}`,
                      boxShadow: "none",
                      backgroundColor: palette.white,
                    }}
                  >
                    {s.icon}
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color={palette.text}
                      mt={2}
                      mb={1}
                    >
                      {s.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={palette.medium}
                      sx={{ lineHeight: 1.6 }}
                    >
                      {s.text}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PROJECT CAROUSEL */}
      <Box sx={{ backgroundColor: palette.stone, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md" textAlign="center">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={projects[activeProject].img}
              alt={projects[activeProject].title}
              style={{ width: "100%", display: "block" }}
            />
            <Box sx={{ p: 5, backgroundColor: palette.white }}>
              <Typography variant="h5" fontWeight={700} mb={1}>
                {projects[activeProject].title}
              </Typography>
              <Typography variant="body1" color={palette.medium}>
                {projects[activeProject].desc}
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* CTA + STATS */}
      <Box
        sx={{
          backgroundColor: palette.white,
          py: { xs: 10, md: 14 },
          borderTop: `1px solid ${palette.lightBorder}`,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
            alignItems: "center",
          }}
        >
          {/* Stats */}
          <Grid container spacing={4} xs={12} md={6}>
            {[
              { label: "Chantiers terminés", value: 120 },
              { label: "Clients satisfaits", value: 95 },
              { label: "Années d’expérience", value: 10 },
            ].map((stat, i) => (
              <Grid item xs={12} key={i}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    border: `1px solid ${palette.lightBorder}`,
                    boxShadow: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: palette.stone,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={800}
                    color={palette.olive}
                  >
                    {stat.value}+
                  </Typography>
                  <Typography variant="body1" color={palette.text}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA */}
          <Box xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h3"
              fontWeight={900}
              mb={3}
              color={palette.text}
              sx={{ fontSize: { xs: 28, md: 36 } }}
            >
              Lancez votre projet avec FINI PRO
            </Typography>
            <Typography
              variant="body1"
              color={palette.medium}
              mb={5}
              sx={{ lineHeight: 1.7 }}
            >
              Une équipe experte, des matériaux certifiés et un suivi rigoureux
              pour vos travaux de finition et rénovation.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: palette.olive,
                color: palette.white,
                px: 5,
                py: 1.5,
                fontWeight: 700,
                borderRadius: 2,
                "&:hover": { backgroundColor: palette.oliveDark },
              }}
              onClick={() => navigate("/demanderDevis")}
            >
              Demander un devis gratuit
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};
