// Footer.jsx
import * as React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Visa, Mastercard, Amex, Applepay, Googlepay } from "react-pay-icons";

const palette = {
  olive: "#6a875f",
  darkOlive: "#556E51",
  stone: "#E6E8E6",
  stone2: "#F0F1EB",
  text: "#1F1F1F",
};

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const quickLinks = [
    { label: "À propos", path: "/about" },
    { label: "Nos Métiers", path: "/services" },
    { label: "Réalisations", path: "/realisations" },
    { label: "Devis & Contact", path: "/demanderDevis" },
  ];

  const columnStyles = {
    borderRadius: 2,
    p: 3,
    minHeight: 160,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        background: `linear-gradient(to bottom, ${palette.stone2}EE, ${palette.stone2})`,
        py: 2,
      }}
    >
      {/* Columns Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          overflow: "hidden",
          mx: "auto",
          gap: 0,
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            ...columnStyles,
            backgroundColor: palette.olive,
            color: "#fff",
            clipPath: isMobile ? "none" : "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
            flex: 1,
            mb: isMobile ? 2 : 0,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 550,
              fontSize: 28,
              mb: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Embellissez votre espace avec{" "}
            <Box component="span" sx={{ color: "#F5E6C8" }}>
              FINI PRO
            </Box>
          </Typography>
          <Stack direction="row" spacing={0.5} flexWrap="wrap">
            {[Visa, Mastercard, Amex, Applepay, Googlepay].map((Icon, i) => (
              <Box
                key={i}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                sx={{
                  borderRadius: 1.5,
                  boxShadow: "0 1px 5px rgba(0,0,0,0.08)",
                  p: 0.4,
                  mb: 1,
                }}
              >
                <Icon style={{ width: 36, height: 24 }} />
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Center Column (Parallélogramme) */}
        <Box
          sx={{
            ...columnStyles,
            backgroundColor: "#8AAC80",
            color: palette.text,
            flex: 1,
            px: 4,
            mb: isMobile ? 2 : 0,
            transform: isMobile ? "none" : "skewX(-15deg)",
          }}
        >
          <Box sx={{ transform: isMobile ? "none" : "skewX(15deg)" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 26,
                mb: 1.5,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Contactez-nous
            </Typography>
            <Stack spacing={0.5}>
              {[process.env.REACT_APP_BASE_ADRESS,
              process.env.REACT_APP_BASE_MAIL,
              process.env.REACT_APP_BASE_NUMBER].map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: 14,
                    fontWeight: 400,
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    "&:hover": { color: palette.olive, transition: "color 0.3s" },
                    color: "white",
                  }}
                >
                  {i === 0 && "📍 "}
                  {i === 1 && "📧 "}
                  {i === 2 && "📞 "}
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            ...columnStyles,
            backgroundColor: palette.darkOlive,
            color: "#fff",
            clipPath: isMobile ? "none" : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
            flex: 1,
            px: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 26,
              mb: 1.5,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Liens rapides
          </Typography>
          <Stack spacing={0.5}>
            {quickLinks.map((link, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  color: "#E6E8E6",
                  "&:hover": { color: palette.olive, transition: "color 0.3s" },
                }}
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Box
        sx={{
          mr: 2,
          ml: 2,
          mt: 1,
          py: 1,
          borderTop: `1px solid rgba(0,0,0,0.08)`,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(31,31,31,0.6)",
            textAlign: isMobile ? "center" : "left",
            fontFamily: "Inter, sans-serif",
          }}
        >
          © FINI PRO {new Date().getFullYear()} — Tous droits réservés.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: isMobile ? 1 : 0, justifyContent: "center" }}
        >
          {["CGV", "CGU & Mentions légales", "Politique de confidentialité"].map(
            (item, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": { color: palette.olive },
                }}
                onClick={() =>
                  navigate([
                    "/conditionsVentes",
                    "/conditionsUtilisation",
                    "/politiquesConfidentialité",
                  ][i])
                }
              >
                {item}
              </Typography>
            )
          )}
        </Stack>
      </Box>
    </Box>
  );
};
