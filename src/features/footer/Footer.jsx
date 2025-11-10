// Footer.jsx
import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../auth/AuthSlice";
import { motion } from "framer-motion";
import {
  Visa,
  Mastercard,
  Amex,
  Applepay,
  Googlepay,
} from "react-pay-icons"; // ✅ Ajoutés Apple & Google Pay

/* 🎨 Palette EHR */
const palette = {
  bronze: "#AD946B",
  beigeGold: "#ADA06B",
  terracotta: "#AD846B",
  text: "#1B1B1B",
  bgLight: "linear-gradient(180deg,#FBFAF7 0%,#F5F3EE 100%)",
  border: "rgba(27,27,27,0.08)",
};

const FooterWrap = styled(Box)(({ theme }) => ({
  background: palette.bgLight,
  color: palette.text,
  padding: "48px 28px 0px",
  borderTop: `3px solid ${palette.bronze}`,
  [theme.breakpoints.down("sm")]: {
    padding: "36px 20px 0px",
  },
}));

const Title = styled(Typography)({
  fontSize: 15,
  fontWeight: 800,
  color: palette.text,
  marginBottom: 10,
  letterSpacing: 0.4,
});

const SmallText = styled(Typography)({
  fontSize: 13,
  color: "rgba(27,27,27,0.75)",
  cursor: "pointer",
  marginBottom: 4,
  transition: "all 0.25s ease",
  "&:hover": {
    color: palette.terracotta,
    transform: "translateX(2px)",
  },
});

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectLoggedInUser);

  const addr = "2 rue Perdonnet, 75010 Paris";
  const mail = "contact@ehr-batiment.fr";
  const phone = "01 84 00 00 00";

  return (
    <FooterWrap
      component={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* === MAIN FOOTER CONTENT === */}
      <Grid container spacing={4} justifyContent="space-between">
        {/* CONTACT */}
        <Grid item xs={12} md={5}>
          <Title>Discutons de votre projet</Title>


          <Stack spacing={0.3} sx={{ mt: 1 }}>
            <SmallText>📍 EHR SARL — {addr}</SmallText>
            <SmallText>📧 {mail}</SmallText>
            <SmallText>📞 {phone}</SmallText>
          </Stack>
        </Grid>

        {/* QUICK LINKS */}
        <Grid item xs={12} sm={6} md={3}>
          <Title>Liens rapides</Title>
          <Stack spacing={0.3}>
            <SmallText onClick={() => navigate("/about")}>À propos</SmallText>
            <SmallText onClick={() => navigate("/services")}>Nos Métiers</SmallText>
            <SmallText onClick={() => navigate("/demanderDevis")}>Contact</SmallText>
          </Stack>
        </Grid>

        {/* PAYMENTS */}
        <Grid item xs={12} sm={6} md={3}>
          <Title>Paiements sécurisés</Title>
          <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 1 }}>
            {[Visa, Mastercard, Amex, Applepay, Googlepay].map((Icon, i) => (
              <Box
                key={i}
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(27,27,27,0.08)",
                  border: `1px solid ${palette.border}`,
                  p: 0.6,
                }}
              >
                <Icon style={{ width: 40, height: 28 }} />
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* SEPARATOR */}
      <Divider sx={{ my: 3, borderColor: palette.border }} />

      {/* BOTTOM BAR */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
          borderTop: `1px solid ${palette.border}`,
        }}
      >
        <Typography
          sx={{
            fontSize: 13,
            color: "rgba(27,27,27,0.6)",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          © EHR {new Date().getFullYear()} — Tous droits réservés.
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            mt: isMobile ? 1.5 : 0,
            justifyContent: "center",
          }}
        >
          <SmallText onClick={() => navigate("/conditionsVentes")}>CGV</SmallText>
          <SmallText onClick={() => navigate("/conditionsUtilisation")}>
            CGU & Mentions légales
          </SmallText>
        </Stack>
      </Box>
    </FooterWrap>
  );
};
