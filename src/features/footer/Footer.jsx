// Footer.jsx
import * as React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Visa, Mastercard, Amex, Applepay, Googlepay } from "react-pay-icons";

const palette = {
  olive: "#4B6043",
  darkOlive: "#556E51",
  stone: "#E6E8E6",
  text: "#1F1F1F",
};

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const contact = {
    address: "6 Place Robert Belvaux, 94170 Le Perreux-sur-Marne",
    mail: "contact@finipro.fr",
    phone: "01 84 00 00 00",
  };

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
    justifyContent: "center",
  };

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          overflow: "hidden",
          mx: "auto",
        }}
      >
        {/* Left Column: Slogan + Payments */}
        <Box
          sx={{
            ...columnStyles,
            backgroundColor: palette.olive,
            color: "#fff",
            clipPath: isMobile
              ? "none"
              : "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
            flex: 1,
            mb: isMobile ? 2 : 0,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontFamily: "Playfair Display, serif",
            }}
          >
            Embellissez votre espace avec FINI PRO
          </Typography>
          <Stack direction="row" spacing={0.5} flexWrap="wrap">
            {[Visa, Mastercard, Amex, Applepay, Googlepay].map((Icon, i) => (
              <Box
                key={i}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                sx={{
                  bgcolor: "#fff",
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

        {/* Center Column: Contact */}
        <Box
          sx={{
            ...columnStyles,
            backgroundColor: palette.stone,
            color: palette.text,
            clipPath: isMobile
              ? "none"
              : "polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)",
            flex: 1,
            px: 4,
            mb: isMobile ? 2 : 0,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              mb: 1.5,
              fontFamily: "Playfair Display, serif",
            }}
          >
            Contactez-nous
          </Typography>
          <Stack spacing={0.5}>
            <Typography
              sx={{
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                "&:hover": { color: palette.olive, transition: "color 0.3s" },
              }}
            >
              📍 {contact.address}
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                "&:hover": { color: palette.olive, transition: "color 0.3s" },
              }}
            >
              📧 {contact.mail}
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                "&:hover": { color: palette.olive, transition: "color 0.3s" },
              }}
            >
              📞 {contact.phone}
            </Typography>
          </Stack>
        </Box>

        {/* Right Column: Quick Links */}
        <Box
          sx={{
            ...columnStyles,
            backgroundColor: palette.darkOlive,
            clipPath: isMobile
              ? "none"
              : "polygon(0 0, 100% 0, 100% 100%, 5% 100%)",
            flex: 1,
            px: 4,
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              mb: 1.5,
              fontFamily: "Playfair Display, serif",
            }}
          >
            Liens rapides
          </Typography>
          <Stack spacing={0.5}>
            {quickLinks.map((link, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: 13,
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
            fontSize: 12,
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
          <Typography
            sx={{
              fontSize: 12,
              cursor: "pointer",
              "&:hover": { color: palette.olive },
            }}
            onClick={() => navigate("/conditionsVentes")}
          >
            CGV
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              cursor: "pointer",
              "&:hover": { color: palette.olive },
            }}
            onClick={() => navigate("/conditionsUtilisation")}
          >
            CGU & Mentions légales
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              cursor: "pointer",
              "&:hover": { color: palette.olive },
            }}
            onClick={() => navigate("/politiquesConfidentialité")}
          >
            Politique de confidentialité
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
