import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Stack,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const servicesData = [
  {
    title: "Transport public routier de marchandises",
    desc: "Transport de marchandises avec véhicules ≤ 3,5 tonnes, pour professionnels et particuliers.",
  },
  {
    title: "Déménagements particuliers et professionnels",
    desc: "Nous assurons vos déménagements avec soin et efficacité, quel que soit le volume.",
  },
  {
    title: "Livraisons express et sur mesure",
    desc: "Un service de livraison rapide, fiable et adapté à vos besoins spécifiques.",
  },
  {
    title: "Débarras, enlèvement et transfert de matériel",
    desc: "Nous gérons le débarras et le transfert de vos équipements en toute sécurité.",
  },
  {
    title: "Location courte durée de voitures et utilitaires",
    desc: "Des véhicules modernes disponibles pour la durée qui vous convient.",
  },
  {
    title: "Achat et vente de véhicules légers",
    desc: "Nous proposons des véhicules récents à la vente et facilitons vos transactions.",
  },
];

export const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Stack spacing={4} alignItems="center" textAlign="center">
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: "#0F3F80", mb: 2 }}
      >
        Nos Services
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {servicesData.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div
              layout
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => toggleService(index)}
            >
              <Box
                sx={{
                  backgroundColor:
                    openIndex === index ? "#0F3F80" : "rgba(15,63,128,0.07)",
                  color: openIndex === index ? "white" : "text.primary",
                  borderRadius: "50%",
                  width: isMobile ? 200 : 220,
                  height: isMobile ? 200 : 220,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  boxShadow:
                    openIndex === index
                      ? "0 8px 20px rgba(15,63,128,0.4)"
                      : "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease-in-out",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    px: 2,
                    fontWeight: 600,
                    color: openIndex === index ? "#fff" : "#0F3F80",
                  }}
                >
                  {service.title}
                </Typography>

                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1.5,
                        px: 2,
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      {service.desc}
                    </Typography>
                  </motion.div>
                )}
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
