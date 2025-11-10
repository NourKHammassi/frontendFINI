import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export const PolitiquesConfidentialite = () => {
  const politiqueSections = [
    {
      title: "📥 Collecte des données",
      content: `PERFECT TRANSPORT collecte uniquement les données nécessaires à la gestion de son activité, notamment pour :
- La gestion commerciale et logistique de nos prestations (transport, déménagement, livraison, location de véhicules)
- L’émission et le suivi des devis et factures
- La communication avec nos clients et prospects, avec leur consentement explicite
- La gestion administrative et comptable

Nous ne collectons aucune donnée inutile ou disproportionnée par rapport à nos besoins.`
    },
    {
      title: "🎯 Finalités du traitement",
      content: `Les données recueillies sont utilisées dans le strict cadre de nos missions, à savoir :
- Gérer les demandes de devis, réservations et prestations
- Assurer le suivi administratif, contractuel et financier
- Communiquer avec nos clients (emails, rappels, informations de service, actualités), uniquement avec leur accord

Aucune donnée n’est utilisée à d’autres fins sans votre consentement explicite.`
    },
    {
      title: "🗄️ Durée de conservation",
      content: `Les données personnelles sont conservées uniquement le temps nécessaire à la réalisation des finalités mentionnées ci-dessus, puis archivées ou supprimées conformément à la réglementation en vigueur.

Les durées de conservation peuvent varier selon la nature du traitement (ex. : obligations comptables ou légales).`
    },
    {
      title: "👤 Droits des personnes",
      content: `Conformément au RGPD, chaque utilisateur dispose des droits suivants :
- Droit d’accès à ses données
- Droit de rectification en cas d’erreur
- Droit à l’effacement (“droit à l’oubli”)
- Droit d’opposition à certains traitements
- Droit à la limitation du traitement de ses données
- Droit à la portabilité, lorsque cela est applicable

Ces droits peuvent être exercés à tout moment en écrivant à :
📧 ${process.env.REACT_APP_BASE_MAIL}
📮 PERFECT TRANSPORT – 3 Rue Joseph Barra, 95100 Argenteuil, France`
    },
    {
      title: "🔐 Sécurité des données",
      content: `PERFECT TRANSPORT met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité des données personnelles, afin de les protéger contre :
- L’accès non autorisé
- La perte ou l’altération
- La destruction ou la divulgation non autorisée

L’accès aux données est strictement limité aux collaborateurs et partenaires habilités, dans le cadre de leurs missions et soumis à une obligation de confidentialité.`
    },
    {
      title: "⚠️ Informations importantes",
      content: `Aucune donnée n’est vendue ni transmise à des tiers sans consentement préalable, sauf obligation légale ou judiciaire.

En cas de violation de données, PERFECT TRANSPORT notifiera les autorités compétentes et les personnes concernées conformément à la réglementation.`
    },
    {
      title: "📩 Contact",
      content: `Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter notre service de gestion des données à l’adresse suivante :
📧 ${process.env.REACT_APP_BASE_MAIL}
📮 PERFECT TRANSPORT – 3 Rue Joseph Barra, 95100 Argenteuil, France`
    }
  ];

  return (
    <Box sx={{ width: "100%", py: 6, px: 2, bgcolor: "#121212" }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: "#FFD700" }}
      >
        Politique de Confidentialité & Sécurité – PERFECT TRANSPORT
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          borderRadius: 2,
          bgcolor: "#1E1E1E",
          color: "#E0E0E0",
          maxWidth: "1200px",
          mx: "auto"
        }}
      >
        {politiqueSections.map((section, idx) => (
          <Box key={idx} mb={4}>
            <Typography variant="h5" gutterBottom sx={{ color: "#FFD700" }}>
              {section.title}
            </Typography>
            <Typography sx={{ whiteSpace: "pre-line" }}>
              {section.content}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};
