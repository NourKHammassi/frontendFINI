// RealisationsBlock.jsx
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { bureaux, maisonIndiv, renovation } from "../../assets";
import { LocationOn, Timer } from "@mui/icons-material";

const palette = {
    darkGray: "#2B2B2B",
    mediumGray: "#555555",
    lightGray: "#F4F5F7",
    white: "#FFFFFF",
    accent: "#4B6043", // subtle accent
};

export const RealisationsBlock = () => {
    const projects = [
        {
            title: "Appartement parisien rénové – Paris 10e",
            location: "Paris (75)",
            duration: "5 jours",
            description:
                "Reprise complète des murs et peinture haut de gamme. Pièce modernisée, murs lissés et teinte harmonieuse.",
            image: renovation,
        },
        {
            title: "Local commercial modernisé – Lyon",
            location: "Lyon (69)",
            duration: "7 jours",
            description:
                "Pose de cloisons amovibles et sol PVC effet bois. Espace modulable et prêt à accueillir du public.",
            image: bureaux,
        },
        {
            title: "Maison rénovée – Toulouse",
            location: "Toulouse (31)",
            duration: "4 jours",
            description:
                "Peinture façade et remise en état du jardin. Extérieur valorisé, finition durable et esthétique.",
            image: maisonIndiv,
        },
    ];

    const [index, setIndex] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % projects.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [projects.length]);

    const slideVariants = {
        enter: { opacity: 0, x: 100 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
        <Box sx={{ background: palette.lightGray, py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h3" fontWeight={800} color={palette.darkGray}>
                        Nos Réalisations Récentes
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ maxWidth: 700, mx: "auto", mt: 2, color: palette.mediumGray, lineHeight: 1.7 }}
                    >
                        Chaque projet reflète notre expertise et notre attention aux détails.
                    </Typography>
                </Box>

                {/* Carousel */}
                <Box sx={{ position: "relative", height: { xs: 400, md: 450 }, overflow: "hidden" }}>
                    <AnimatePresence>
                        <motion.div
                            key={index}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.8 }}
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 12px 36px rgba(0,0,0,0.12)",
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    backgroundColor: palette.white,
                                }}
                            >
                                <Box
                                    sx={{
                                        flex: 1,
                                        backgroundImage: `url(${projects[index].image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: 220,
                                    }}
                                />
                                <Box sx={{ flex: 1, p: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Typography variant="h5" fontWeight={700} color={palette.darkGray} mb={2}>
                                        {projects[index].title}
                                    </Typography>
                                    <Stack direction="row" spacing={3} mb={2}>
                                        <Stack direction="row" spacing={0.5} alignItems="center">
                                            <LocationOn sx={{ fontSize: 18, color: palette.accent }} />
                                            <Typography variant="body2" color={palette.mediumGray}>{projects[index].location}</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={0.5} alignItems="center">
                                            <Timer sx={{ fontSize: 18, color: palette.accent }} />
                                            <Typography variant="body2" color={palette.mediumGray}>{projects[index].duration}</Typography>
                                        </Stack>
                                    </Stack>
                                    <Typography variant="body1" sx={{ color: palette.darkGray, lineHeight: 1.6 }}>
                                        {projects[index].description}
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </AnimatePresence>
                </Box>
            </Container>
        </Box>
    );
};
