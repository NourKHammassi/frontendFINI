import React from "react";
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { bureaux, maisonIndiv, renovation } from "../../assets";

// 🟤 Palette cohérente avec le reste du site
const palette = {
    bronze: "#AD946B",
    clay: "#B47E5D",
    sand: "#FAF9F7",
    text: "#2B2B2B",
    white: "#FFFFFF",
};

export const RealisationsBlock = () => {
    const projects = [
        {
            title: "Rénovation d’un immeuble haussmannien – Paris 10e",
            client: "Copropriété privée",
            duration: "6 mois",
            works:
                "Ravalement de façade, rénovation des communs, réfection complète des réseaux",
            description:
                "Un projet mené avec soin pour préserver l’élégance du patrimoine parisien tout en modernisant les performances énergétiques.",
            image: renovation,
        },
        {
            title: "Extension et modernisation d’une maison individuelle – Montreuil",
            client: "Particulier",
            duration: "4 mois",
            works:
                "Agrandissement de 45 m², cuisine ouverte, menuiseries sur mesure",
            description:
                "Une rénovation lumineuse et contemporaine, où design et fonctionnalité s’allient parfaitement.",
            image: maisonIndiv
        },
        {
            title: "Aménagement de bureaux professionnels – Saint-Denis",
            client: "Société de services",
            duration: "3 mois",
            works:
                "Création d’espaces de travail collaboratifs, climatisation, câblage réseau",
            description:
                "Un environnement de travail moderne et ergonomique, pensé pour le confort et la productivité.",
            image: bureaux
        },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.15 },
        }),
    };

    return (
        <>
            <Box
                sx={{
                    background: `linear-gradient(180deg, ${palette.sand} 0%, #F4F1EC 100%)`,
                    minHeight: "100vh",
                    py: { xs: 6, md: 10 },
                }}
            >
                <Container maxWidth="lg">
                    {/* HEADER */}
                    <Box textAlign="center" mb={6}>
                        <Typography
                            variant="h3"
                            fontWeight={800}
                            color={palette.bronze}
                            component={motion.h2}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Réalisations
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ color: "rgba(43,43,43,0.75)", mt: 1 }}
                            component={motion.p}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Quelques-unes de nos réalisations récentes
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 750,
                                mx: "auto",
                                mt: 3,
                                color: "rgba(43,43,43,0.7)",
                                lineHeight: 1.7,
                            }}
                            component={motion.p}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Chaque projet réalisé par EHR illustre notre engagement envers la
                            qualité, la précision et la satisfaction de nos clients. Voici un
                            aperçu de réalisations qui reflètent notre savoir-faire.
                        </Typography>
                    </Box>

                    {/* PROJECTS */}
                    <Grid container spacing={5}>
                        {projects.map((p, i) => (
                            <Grid item xs={12} md={4} key={i}>
                                <Card
                                    component={motion.div}
                                    custom={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 140 }}
                                    sx={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
                                        border: `1px solid ${palette.bronze}22`,
                                        backgroundColor: palette.white,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={p.image}
                                        alt={p.title}
                                        sx={{
                                            height: 220,
                                            objectFit: "cover",
                                            filter: "brightness(0.92)",
                                            transition: "0.4s",
                                            "&:hover": { filter: "brightness(1)" },
                                        }}
                                    />
                                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                            sx={{ color: palette.bronze, mb: 1 }}
                                        >
                                            {p.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Client :</strong> {p.client}
                                            <br />
                                            <strong>Durée :</strong> {p.duration}
                                            <br />
                                            <strong>Travaux :</strong> {p.works}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mt: 2,
                                                color: "rgba(43,43,43,0.8)",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {p.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};
