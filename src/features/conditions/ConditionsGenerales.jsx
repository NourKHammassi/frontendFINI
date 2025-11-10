import React from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";

const palette = {
  bronze: "#AD946B",
  sand: "#ADA06B",
  clay: "#AD846B",
  text: "#2B2B2B",
  lightBg: "linear-gradient(180deg,#FAF9F7 0%,#F4F2EE 100%)",
};

export const ConditionsGeneralesVentes = () => {
  const sections = [
    {
      title: "Article 1 – Objet",
      content:
        "Les présentes CGV régissent les relations contractuelles entre EHR SARL et ses clients (particuliers ou professionnels) dans le cadre de prestations de travaux tous corps d’état, ingénierie, rénovation et coordination de chantier.",
    },
    {
      title: "Article 2 – Commandes",
      content:
        "Toute demande de travaux donne lieu à un devis écrit. La commande devient ferme à la signature du devis ou à l’acceptation par email, accompagnée d’un acompte de 30 % du montant global.",
    },
    {
      title: "Article 3 – Tarifs et paiement",
      content:
        "Les prix sont exprimés en euros, TTC pour les particuliers, HT pour les professionnels. Le solde est dû à la livraison des travaux. Tout retard entraîne des pénalités conformément à l’article L441-10 du Code de commerce.",
    },
    {
      title: "Article 4 – Rétractation",
      content:
        "Les clients particuliers disposent d’un délai de 14 jours pour se rétracter pour les contrats conclus à distance, sauf si les travaux ont commencé avant la fin du délai.",
    },
    {
      title: "Article 5 – Exécution des prestations",
      content:
        "EHR s’engage à :\n\n- réaliser les prestations conformément aux règles de l’art et aux normes en vigueur,\n- respecter les délais convenus,\n- informer le client de tout incident ou retard éventuel.",
    },
    {
      title: "Article 6 – Responsabilité",
      content:
        "EHR est assurée en responsabilité civile décennale et professionnelle. La société ne saurait être tenue responsable :\n\n- des dommages indirects ou immatériels (perte de temps, d’exploitation, etc.),\n- ou d’une mauvaise utilisation des ouvrages par le client.",
    },
    {
      title: "Article 7 – Réclamations",
      content:
        "Toute réclamation doit être adressée par écrit à :\n📮 EHR SARL – 2 rue Perdonnet, 75010 Paris\n📧 contact@ehr-batiment.fr",
    },
    {
      title: "Article 8 – Données personnelles",
      content:
        "Les données client sont collectées uniquement pour la gestion administrative et commerciale. Aucune information n’est transmise à des tiers.",
    },
    {
      title: "Article 9 – Droit applicable",
      content:
        "Les présentes CGV sont régies par le droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.",
    },
  ];

  return (
    <Box
      sx={{
        background: palette.lightBg,
        py: { xs: 6, md: 10 },
        px: 2,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <Box textAlign="center" mb={5}>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                color: palette.bronze,
                mb: 2,
                letterSpacing: "0.5px",
              }}
            >
              ⚖️ Conditions Générales de Vente
            </Typography>
            <Typography
              variant="body1"
              color="rgba(43,43,43,0.75)"
              maxWidth="45rem"
              mx="auto"
            >
              Ces conditions s’appliquent à l’ensemble des prestations fournies
              par <strong style={{ color: palette.bronze }}>EHR SARL</strong>,
              société spécialisée dans les travaux tous corps d’état, l’ingénierie
              et la rénovation.
            </Typography>
          </Box>

          {/* Content Card */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              backgroundColor: "#fff",
              boxShadow: "0 10px 35px rgba(173,148,107,0.15)",
              lineHeight: 1.7,
              color: palette.text,
            }}
          >
            {/* Company Info */}
            <Box mb={5}>
              <Typography variant="subtitle1" fontWeight={700} color={palette.clay} mb={1}>
                Informations légales :
              </Typography>
              <Typography variant="body1" color="rgba(43,43,43,0.8)">
                Société à responsabilité limitée (SARL) au capital de 30 000 €<br />
                RCS Paris : 918 202 714<br />
                Date d’immatriculation : 8 août 2022<br />
                Siège social : 2 rue Perdonnet, 75010 Paris, France<br />
                Gérant : M. Rida Awlade Dyafe, né le 15/12/1972 à Rennes (France)<br />
                Activités principales : Travaux tous corps d’état, ingénierie,
                rénovation et coordination de chantier.
              </Typography>
            </Box>

            <Divider
              sx={{
                mb: 5,
                borderColor: "rgba(173,148,107,0.3)",
              }}
            />

            {/* Articles */}
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Box mb={5}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      color: palette.clay,
                      borderLeft: `5px solid ${palette.bronze}`,
                      pl: 1.5,
                      mb: 1.5,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: "pre-line",
                      color: "rgba(43,43,43,0.85)",
                      pl: 0.5,
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};
