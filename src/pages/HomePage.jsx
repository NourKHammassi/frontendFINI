import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../features/navigation/components/Navbar";
import { Footer } from "../features/footer/Footer";
import PaletteIcon from "@mui/icons-material/Palette";
import RoofingIcon from "@mui/icons-material/Roofing";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

// images from your assets index
import {
  peinture,
  carrelage,
  architecte,
  mesureBois,
  interieuSol,
  discuPlan,
  nettoyageChantier,
} from "../assets";

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

  // hero collage uses 3 images (each image used once across pages per your rule)
  const collage = [peinture, carrelage, architecte];

  // simple stats animation using requestAnimationFrame
  const animateValue = (start, end, duration, callback) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      callback(value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const [stats, setStats] = useState({ chantiers: 0, clients: 0, years: 0 });

  useEffect(() => {
    animateValue(0, 120, 1400, (v) => setStats((s) => ({ ...s, chantiers: v })));
    animateValue(0, 95, 1400, (v) => setStats((s) => ({ ...s, clients: v })));
    animateValue(0, 10, 1400, (v) => setStats((s) => ({ ...s, years: v })));
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO: text + 3-image collage (no heavy animations) */}
      <Box sx={{ backgroundColor: palette.stone, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight={900} color={palette.text} sx={{ fontSize: { xs: 30, md: 44 } }} mb={2}>
                Des finitions qui font la différence
              </Typography>
              <Typography variant="body1" color={palette.medium} sx={{ maxWidth: 520 }}>
                FINI PRO réalise vos travaux de finition et rénovation intérieure avec précision, durabilité et sens du détail.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Box sx={{ height: 150, borderRadius: 2, backgroundImage: `url(${collage[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ height: 150, borderRadius: 2, backgroundImage: `url(${collage[1]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ height: 150, borderRadius: 2, backgroundImage: `url(${collage[2]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services */}
      <Box sx={{ backgroundColor: palette.white, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} textAlign="center" mb={6}>
            Nos Métiers
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {services.map((s, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card sx={{ p: 3, borderRadius: 2, textAlign: 'center', border: `1px solid ${palette.lightBorder}`, boxShadow: 'none' }}>
                  {s.icon}
                  <Typography variant="h6" fontWeight={700} mt={2} mb={1}>{s.title}</Typography>
                  <Typography variant="body2" color={palette.medium}>{s.text}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Feature row with multiple images added (keeps layout lightweight) */}
      <Box sx={{ backgroundColor: palette.stone, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 3, overflow: 'hidden', height: 360, backgroundImage: `url(${mesureBois})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={800} mb={2}>Rénovations & finitions haut de gamme</Typography>
              <Typography color={palette.medium} sx={{ lineHeight: 1.7 }}>
                Nos équipes interviennent sur tous types de projets : appartements, maisons, bureaux et commerces. Un rendu propre, durable et maîtrisé.
              </Typography>

              <Grid container spacing={1} mt={2}>
                <Grid item xs={4}>
                  <Box sx={{ height: 96, borderRadius: 2, backgroundImage: `url(${interieuSol})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ height: 96, borderRadius: 2, backgroundImage: `url(${discuPlan})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ height: 96, borderRadius: 2, backgroundImage: `url(${nettoyageChantier})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA + animated stats */}
      <Box sx={{ backgroundColor: palette.white, py: { xs: 8, md: 12 }, borderTop: `1px solid ${palette.lightBorder}` }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ p: 3, borderRadius: 2, backgroundColor: palette.stone }}>
                    <Typography variant="h4" fontWeight={800} color={palette.olive}>{stats.chantiers}+</Typography>
                    <Typography variant="body2">Chantiers terminés</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ p: 3, borderRadius: 2, backgroundColor: palette.stone }}>
                    <Typography variant="h4" fontWeight={800} color={palette.olive}>{stats.clients}+</Typography>
                    <Typography variant="body2">Clients satisfaits</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ p: 3, borderRadius: 2, backgroundColor: palette.stone }}>
                    <Typography variant="h4" fontWeight={800} color={palette.olive}>{stats.years}+</Typography>
                    <Typography variant="body2">Années d'expérience</Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={900} mb={2}>Lancez votre projet avec FINI PRO</Typography>
              <Typography variant="body1" color={palette.medium} mb={3}>Une équipe experte, des matériaux certifiés et un suivi rigoureux pour vos travaux de finition et rénovation.</Typography>
              <Button variant="contained" onClick={() => navigate('/demanderDevis')} sx={{ backgroundColor: palette.olive, color: palette.white, px: 4, py: 1.25, fontWeight: 700, '&:hover': { backgroundColor: palette.oliveDark } }}>Demander un devis gratuit</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};