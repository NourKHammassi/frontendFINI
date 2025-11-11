import React from "react";
import { Box, Container, Typography, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";

const palette = {
  olive: "#4B6043",
  darkOlive: "#556E51",
  stone: "#F0F1EB",
  text: "#1F1F1F",
  white: "#FFFFFF",
};

export const ConditionsGeneralesVentes = () => {
  const sections = [
    {
      title: "Article 1 – Objet",
      content: `Les présentes Conditions Générales de Vente (CGV) définissent les modalités contractuelles entre FINI PRO et ses clients dans le cadre de travaux de finition, peinture, revêtements, plâtrerie, aménagement et nettoyage de fin de chantier.`,
    },
    {
      title: "Article 2 – Commandes et devis",
      content: `Toute prestation donne lieu à un devis écrit et détaillé (nature des travaux, prix, délais, conditions particulières). La commande est considérée comme ferme dès signature du devis par le client avec la mention « Bon pour accord ».`,
    },
    {
      title: "Article 3 – Tarifs et modalités de paiement",
      content: `Les prix sont exprimés en euros (€) : TTC pour les particuliers, HT pour les professionnels. Un acompte peut être demandé à la commande (montant mentionné sur le devis). Le solde est payable à la fin des travaux, sauf accord écrit contraire. Tout retard de paiement entraîne des pénalités de retard et une indemnité forfaitaire de recouvrement de 40 €.`,
    },
    {
      title: "Article 4 – Rétractation et annulation",
      content: `Pour les particuliers : droit de rétractation de 14 jours pour les contrats conclus à distance ou hors établissement, sauf en cas de travaux urgents expressément demandés par le client. Pour les professionnels : aucune rétractation après acceptation écrite du devis.`,
    },
    {
      title: "Article 5 – Obligations du client",
      content: `Le client s'engage à : fournir un accès sécurisé aux lieux du chantier, communiquer des informations exactes et complètes sur l’état des lieux, garantir la disponibilité des surfaces et zones de travail avant intervention.`,
    },
    {
      title: "Article 6 – Obligations de FINI PRO",
      content: `FINI PRO garantit : des matériaux conformes aux normes en vigueur, la garantie de parfait achèvement (1 an), la garantie biennale (2 ans) pour les éléments dissociables, et la garantie décennale pour les travaux structurels si applicable.`,
    },
    {
      title: "Article 7 – Retards et impossibilité d’exécution",
      content: `Aucune indemnisation n’est due en cas de retard causé par un cas de force majeure (intempéries, grève, panne, accident, blocage administratif, etc.).`,
    },
    {
      title: "Article 8 – Responsabilité et assurances",
      content: `FINI PRO est couverte par une assurance Responsabilité Civile Professionnelle. Toute mauvaise utilisation, dégradation après réalisation ou usage non conforme engage la responsabilité du client.`,
    },
    {
      title: "Article 9 – Données personnelles",
      content: `Les données collectées sont utilisées exclusivement pour la gestion des devis, factures, chantiers et suivi client. Conformément au RGPD et à la Loi Informatique et Libertés.`,
    },
    {
      title: "Article 10 – Réclamations et médiation",
      content: `Toute réclamation doit être formulée dans les 7 jours suivant la fin des travaux. Les particuliers peuvent recourir gratuitement à un médiateur à la consommation agréé.`,
    },
    {
      title: "Article 11 – Droit applicable et juridiction compétente",
      content: `Les présentes CGV sont régies par le droit français. En cas de litige, compétence exclusive des juridictions du Tribunal de commerce de Créteil.`,
    },
  ];

  return (
    <Box sx={{ backgroundColor: palette.stone, py: 10, width: "100%" }}>
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
              color={palette.olive}
              mb={2}
            >
              ⚖️ Conditions Générales de Vente – FINI PRO
            </Typography>
            <Typography
              variant="body1"
              color={palette.text}
              maxWidth="45rem"
              mx="auto"
            >
              Ces conditions s’appliquent à toutes les prestations fournies par FINI PRO, société spécialisée dans les travaux de finition et rénovation.
            </Typography>
          </Box>

          {/* Articles */}
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              backgroundColor: palette.white,
              boxShadow: `0 6px 20px rgba(75,96,67,0.15)`,
              color: palette.text,
              lineHeight: 1.7,
            }}
          >
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
                      color: palette.darkOlive,
                      borderLeft: `5px solid ${palette.olive}`,
                      pl: 1.5,
                      mb: 1.5,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ whiteSpace: "pre-line", color: palette.text }}
                  >
                    {section.content}
                  </Typography>
                </Box>
                {idx !== sections.length - 1 && (
                  <Divider sx={{ borderColor: "rgba(75,96,67,0.2)", mb: 5 }} />
                )}
              </motion.div>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};
