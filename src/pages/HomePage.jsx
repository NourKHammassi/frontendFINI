// HomePage.jsx
import React from "react";
import { Navbar } from "../features/navigation/components/Navbar";
import { Footer } from "../features/footer/Footer";
import { motion } from "framer-motion";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ConstructionIcon from "@mui/icons-material/Construction";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useNavigate } from "react-router-dom";
import {
  architecture,
  construction,
  engenier,
  planning,
  worker,
  solar,
} from "../assets";

/* 🎨 Bronze Palette */
const bronze = "#AD946B";
const beigeGold = "#ADA06B";
const terracotta = "#AD846B";
const dark = "#1B1B1B";
const lightBg = "#FBFAF7";

export const HomePage = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Maîtrise technique",
      text: "Tous corps d’état — du gros-œuvre aux finitions, nous coordonnons et réalisons avec précision.",
      icon: <EngineeringIcon sx={{ fontSize: 36, color: bronze }} />,
      img: construction,
    },
    {
      title: "Respect des délais",
      text: "Planning maîtrisé, suivi régulier et communication transparente tout au long du chantier.",
      icon: <HomeRepairServiceIcon sx={{ fontSize: 36, color: bronze }} />,
      img: planning,
    },
    {
      title: "Qualité & durabilité",
      text: "Matériaux sélectionnés pour performance et impact environnemental réduit.",
      icon: <ConstructionIcon sx={{ fontSize: 36, color: bronze }} />,
      img: solar,
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "85vh", md: "80vh" },
          backgroundColor: "#F8F5EF", // beige clair doux
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1B1B1B",
          textAlign: "left",
          px: { xs: 3, md: 8 },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Texte principal */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ flex: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 3,
                letterSpacing: 0.5,
                fontSize: { xs: "2.3rem", md: "3.3rem" },
                color: "#1B1B1B",
              }}
            >
              L’ingénierie au service de vos projets
            </Typography>

            <Typography
              variant="h6"
              sx={{
                maxWidth: 600,
                opacity: 0.8,
                mb: 5,
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(27,27,27,0.8)",
              }}
            >
              De la conception à la réalisation, EHR vous accompagne dans tous vos projets
              de construction et de rénovation — avec exigence, passion et savoir-faire.
            </Typography>
          </motion.div>

          {/* Boutons à droite */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "16px",
              flex: 1,
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: `linear-gradient(90deg, ${bronze}, ${beigeGold})`,
                color: "#fff",
                fontWeight: 800,
                px: 4,
                py: 1.3,
                borderRadius: 2,
                fontSize: "1rem",
                width: "fit-content",
                boxShadow: "0 8px 20px rgba(173,148,107,0.4)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 28px rgba(173,148,107,0.55)",
                },
              }}
              onClick={() => navigate("/demanderDevis")}
            >
              Demander un devis
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: bronze,
                color: bronze,
                fontWeight: 700,
                px: 3,
                py: 1.2,
                borderRadius: 2,
                fontSize: "1rem",
                width: "fit-content",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: bronze,
                  color: "#fff",
                  borderColor: bronze,
                  boxShadow: "0 8px 20px rgba(173,148,107,0.4)",
                },
              }}
              onClick={() => navigate("/services")}
            >
              Découvrir nos métiers
            </Button>
          </motion.div>
        </Container>
      </Box>


      {/* ABOUT */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, mb: 3, color: dark }}
              >
                Expertise, rigueur et vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(27,27,27,0.75)",
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                Depuis plus de dix ans, EHR se distingue par une approche
                intégrée de la construction : ingénierie, coordination et
                exécution. Nous plaçons l’humain, la durabilité et la qualité au
                cœur de chaque réalisation.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.img
              src={engenier}
              alt="Ingénierie"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                objectFit: "cover",
              }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* HIGHLIGHTS */}
      <Box sx={{ backgroundColor: lightBg, py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 6,
              color: dark,
            }}
          >
            Nos engagements
          </Typography>

          <Grid container spacing={4}>
            {highlights.map((h, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 160 }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Box
                      sx={{
                        height: 180,
                        backgroundImage: `url(${h.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{h.icon}</Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1, color: dark }}
                      >
                        {h.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(27,27,27,0.7)" }}
                      >
                        {h.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA FINAL */}
      <Box
        sx={{
          backgroundImage: `url(${worker})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 12,
          position: "relative",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, mb: 2, letterSpacing: 0.5 }}
          >
            Votre projet, notre mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              mb: 4,
              maxWidth: 650,
              mx: "auto",
            }}
          >
            Quelle que soit la taille ou la complexité de votre chantier, nous
            vous accompagnons avec expertise et engagement, de l’idée à la
            livraison.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: `linear-gradient(90deg, ${terracotta}, ${bronze})`,
              color: "#fff",
              px: 5,
              py: 1.5,
              fontWeight: 800,
              borderRadius: 2,
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => navigate("/demanderDevis")}
          >
            Demander un devis gratuit
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
};
