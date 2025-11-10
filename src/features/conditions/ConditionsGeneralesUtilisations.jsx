import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";

const palette = {
  gold: "#AD946B",
  sand: "#ADA06B",
  clay: "#AD846B",
  text: "#2B2B2B",
  bg: "#FFFDF9",
};

export const ConditionsGeneralesUtilisations = () => {
  const cguSections = [
    {
      title: "Article 1 – Objet",
      content:
        "Les présentes CGU définissent les modalités d’accès et d’utilisation du site internet www.ehr-batiment.fr, édité par EHR SARL. L’accès et la navigation sur le site impliquent l’acceptation sans réserve des présentes conditions.",
    },
    {
      title: "Article 2 – Accès au site",
      content:
        "EHR s’efforce d’assurer un accès continu et sécurisé au site. Cependant, la société ne saurait être tenue responsable en cas d’interruption temporaire, de maintenance ou de force majeure.",
    },
    {
      title: "Article 3 – Contenu du site",
      content:
        "Tous les contenus publiés (textes, photos, vidéos, graphiques, etc.) ont une vocation informative et peuvent être modifiés sans préavis. EHR veille à leur exactitude, sans pouvoir garantir l’absence totale d’erreurs.",
    },
    {
      title: "Article 4 – Propriété intellectuelle",
      content:
        "Le site et l’ensemble de ses éléments sont protégés par le droit d’auteur. Toute reproduction ou réutilisation sans accord écrit de EHR est interdite.",
    },
    {
      title: "Article 5 – Données personnelles",
      content:
        "EHR respecte la confidentialité de vos données, conformément au RGPD. Les informations transmises via les formulaires sont utilisées exclusivement pour répondre à vos demandes et ne sont jamais partagées avec des tiers.",
    },
    {
      title: "Article 6 – Responsabilité",
      content:
        "EHR ne saurait être tenue responsable des dommages directs ou indirects résultant de l’utilisation du site ou de l’impossibilité d’y accéder.",
    },
    {
      title: "Article 7 – Liens externes",
      content:
        "Le site peut contenir des liens vers d’autres sites dont EHR ne contrôle pas le contenu. L’entreprise décline toute responsabilité concernant ces sources externes.",
    },
    {
      title: "Article 8 – Droit applicable",
      content:
        "Les présentes CGU sont régies par le droit français. Tout litige relèvera du Tribunal de commerce de Paris.",
    },
  ];

  const mentionsLegales = [
    {
      title: "Éditeur du site",
      content: `EHR SARL
Société à responsabilité limitée au capital de 30 000 €
Immatriculée au RCS de Paris sous le numéro 918 202 714
Date d’immatriculation : 8 août 2022
Siège social : 2 rue Perdonnet, 75010 Paris, France
Gérant : M. Rida Awlade Dyafe, né le 15/12/1972 à Rennes (France)
📧 Email : contact@ehr-batiment.fr
📞 Téléphone : +33 (0)1 84 00 00 00`,
    },
    {
      title: "Hébergement du site",
      content: `Le site www.ehr-batiment.fr est hébergé par :
Hostinger International Ltd.
Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre
🌐 www.hostinger.com
📞 Téléphone : +370 645 03378`,
    },
    {
      title: "Propriété intellectuelle",
      content: `L’ensemble des éléments présents sur le site www.ehr-batiment.fr (textes, images, graphismes, vidéos, codes sources, logos, structures, bases de données, etc.) est la propriété exclusive de EHR SARL, sauf mention contraire.
Toute reproduction, représentation, modification ou diffusion sans autorisation écrite est strictement interdite (articles L335-2 et suivants du Code de la propriété intellectuelle).`,
    },
    {
      title: "Données personnelles",
      content: `Les données collectées via le site (formulaire de contact, demande de devis, etc.) sont utilisées uniquement dans le cadre de la relation commerciale avec EHR.
Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition que vous pouvez exercer à :
📧 contact@ehr-batiment.fr`,
    },
    {
      title: "Droit applicable",
      content:
        "Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, compétence exclusive est attribuée au Tribunal de commerce de Paris, sauf disposition légale contraire.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        px: 2,
        background: `linear-gradient(180deg, ${palette.bg} 0%, #FBF7EE 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* CGU Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight={800}
            sx={{
              color: palette.gold,
              mb: 4,
            }}
          >
            Conditions Générales d’Utilisation (CGU) – EHR
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              backgroundColor: "#fff",
              boxShadow: `0 8px 20px rgba(173,148,107,0.15)`,
              color: palette.text,
              lineHeight: 1.7,
            }}
          >
            {cguSections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Box mb={4}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      color: palette.clay,
                      borderLeft: `5px solid ${palette.gold}`,
                      pl: 1.5,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: "pre-line",
                      color: "rgba(43,43,43,0.85)",
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Paper>
        </motion.div>

        {/* Mentions Légales */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight={800}
            sx={{ color: palette.gold, mt: 8, mb: 4 }}
          >
            Mentions Légales – EHR
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              backgroundColor: "#fff",
              boxShadow: `0 8px 20px rgba(173,148,107,0.15)`,
              color: palette.text,
              lineHeight: 1.7,
            }}
          >
            {mentionsLegales.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Box mb={4}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      color: palette.clay,
                      borderLeft: `5px solid ${palette.gold}`,
                      pl: 1.5,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: "pre-line",
                      color: "rgba(43,43,43,0.85)",
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
