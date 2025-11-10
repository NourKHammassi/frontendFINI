// AboutBlock.jsx
import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import { motion } from "framer-motion";
import { construction, engenier, plann } from "../../assets";

const palette = {
  bronze: "#AD946B",
  sand: "#ADA06B",
  clay: "#AD846B",
  text: "#2B2B2B",
  bg: "#FAF9F7",
};

export const AboutBlock = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: palette.bg,
        overflow: "hidden",
        py: { xs: 6, md: 10 },
      }}
    >
      {/* 🌅 Bandeau supérieur semi-transparent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50%",
          // backgroundImage: `url(${construction})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          filter: "blur(3px)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            backgroundColor: "#fff",
            boxShadow: "0 10px 40px rgba(173,148,107,0.25)",
            border: `1px solid ${palette.bronze}33`,
            overflow: "hidden",
          }}
        >
          {/* Header avec image subtile */}
          <Box
            sx={{
              backgroundImage: `url(${engenier})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 180,
              borderRadius: 3,
              mb: 4,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h3"
                fontWeight={900}
                textAlign="center"
                sx={{
                  color: "#fff",
                  letterSpacing: 0.5,
                }}
                component={motion.h2}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                À propos de EHR
              </Typography>
            </Box>
          </Box>

          {/* Contenu */}
          <Stack spacing={3}>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ color: palette.clay }}
              component={motion.div}
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Expertise, Honnêteté, Réalisation
            </Typography>

            <Typography
              variant="body1"
              color="rgba(43,43,43,0.85)"
              component={motion.div}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Fondée en 2022 par <strong>Rida Awlade Dyafe</strong>, ingénieur et
              entrepreneur passionné, <strong>EHR</strong> est née d’une idée simple :
              réunir la précision de l’ingénierie et le savoir-faire du terrain au
              service de projets exigeants.
            </Typography>

            <Typography
              variant="body1"
              color="rgba(43,43,43,0.85)"
              component={motion.div}
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Basée à <strong>Paris</strong>, notre société intervient sur des chantiers
              variés — logements, bureaux, commerces, bâtiments industriels — avec la
              même rigueur et le même souci du détail.
            </Typography>

            <Typography
              variant="body1"
              color="rgba(43,43,43,0.85)"
              component={motion.div}
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Notre mission : offrir à chaque client un accompagnement clair, une
              exécution sans compromis et des ouvrages durables.
            </Typography>

            {/* 🧱 Nos valeurs */}
            <Box mt={4}>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ color: palette.clay, mb: 2 }}
                component={motion.div}
                custom={4}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Nos valeurs
              </Typography>

              <List>
                <ListItem
                  component={motion.div}
                  custom={5}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ListItemIcon>
                    <HandshakeIcon sx={{ color: palette.bronze }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Engagement"
                    secondary="Nous respectons nos délais, nos devis et nos promesses."
                  />
                </ListItem>

                <ListItem
                  component={motion.div}
                  custom={6}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ListItemIcon>
                    <WorkspacePremiumIcon sx={{ color: palette.bronze }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Excellence"
                    secondary="Chaque détail compte, de la planification à la finition."
                  />
                </ListItem>

                <ListItem
                  component={motion.div}
                  custom={7}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ListItemIcon>
                    <GroupsIcon sx={{ color: palette.bronze }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Respect"
                    secondary="Du client, des équipes, des normes et de l’environnement."
                  />
                </ListItem>
              </List>
            </Box>

            {/* 🏗️ Conclusion visuelle */}
            <Box
              sx={{
                mt: 4,
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                height: 200,
              }}
            >
              <img
                src={plann}
                alt="Planification"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  🚀 Avec EHR, vos projets prennent forme avec précision et confiance.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};
