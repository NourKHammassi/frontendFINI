// RealisationsBlock.jsx
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { renovationSol, projetArchitectural, appartRenovation } from "../../assets";

const palette = {
    white: "#FFFFFF",
    text: "#2B2B2B",
    overlay: "rgba(0,0,0,0.3)",
};

export const RealisationsBlock = () => {
    const projects = [
        { title: "Appartement — Paris", duration: "5 jours", image: appartRenovation },
        { title: "Projet architectural — Lyon", duration: "7 jours", image: projetArchitectural },
        { title: "Rénovation de sol — Toulouse", duration: "4 jours", image: renovationSol },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex((p) => (p + 1) % projects.length), 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ECEFE6" }}>
            <Container maxWidth="lg">
                <Typography variant="h3" fontWeight={900} textAlign="center" mb={8}>
                    Nos Réalisations Récentes
                </Typography>

                <Box sx={{ position: "relative", height: { xs: 360, md: 420 } }}>
                    <AnimatePresence>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ position: "absolute", inset: 0 }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: `url(${projects[index].image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        width: "100%",
                                        background: palette.overlay,
                                        color: palette.white,
                                        p: 3,
                                    }}
                                >
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography variant="h6">{projects[index].title}</Typography>
                                        <Typography variant="body2">{projects[index].duration}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </motion.div>
                    </AnimatePresence>
                </Box>
            </Container>
        </Box>
    );
};
