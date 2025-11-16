import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { devisB2B, suiviChantier } from "../../assets";

const palette = {
    bronze: "#AD946B",
    sand: "#ADA06B",
    clay: "#AD846B",
    text: "#2B2B2B",
    bg: "linear-gradient(180deg, #FAF9F7 0%, #F6F3EF 100%)",
    paper: "#FFFFFF",
};

export const PartenariatBlock = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2 },
        }),
    };

    const services = [
        {
            title: "Interventions en sous-traitance ou co-traitance",
            image:
                "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Devis B2B rapides et transparents",
            // image:
            //     devisB2B
        },
        {
            title: "Gestion technique et suivi de chantier",
            // image:
            //     suiviChantier
        },
        {
            title: "Documentation technique et attestations sur demande",
            image:
                "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
        },
    ];

    const navigate = useNavigate();

    return (
        <Box sx={{ background: palette.bg, py: { xs: 6, md: 10 }, minHeight: "100vh" }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h3"
                        component={motion.h2}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            fontWeight: 800,
                            color: palette.bronze,
                            mb: 1,
                            letterSpacing: 0.5,
                        }}
                    >
                        Espace Pro & Partenaires
                    </Typography>
                    <Typography
                        variant="h6"
                        color="rgba(43,43,43,0.7)"
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Collaborons pour construire l’avenir
                    </Typography>
                </Box>

                {/* Intro text */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    sx={{
                        textAlign: "center",
                        maxWidth: "800px",
                        mx: "auto",
                        mb: 6,
                        color: "rgba(43,43,43,0.85)",
                        fontSize: 18,
                        lineHeight: 1.6,
                    }}
                >
                    EHR collabore avec de nombreux <strong>architectes</strong>,
                    <strong> promoteurs</strong>, <strong>bureaux d’études</strong> et{" "}
                    <strong>entreprises générales</strong>.
                    Nous mettons à disposition notre <strong>expérience terrain</strong>, nos{" "}
                    <strong>ressources techniques</strong> et notre{" "}
                    <strong>rigueur d’exécution</strong> pour garantir la réussite de vos projets.
                </Box>

                {/* Services */}
                <Grid container spacing={4}>
                    {services.map((srv, i) => (
                        <Grid item xs={12} sm={6} md={3} key={srv.title}>
                            <Card
                                component={motion.div}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                sx={{
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    boxShadow: "0 8px 25px rgba(173,148,107,0.25)",
                                    border: `1px solid ${palette.bronze}33`,
                                    backgroundColor: palette.paper,
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: "0 16px 40px rgba(173,148,107,0.35)",
                                    },
                                }}
                            >
                                <Box
                                    component={motion.img}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    src={srv.image}
                                    alt={srv.title}
                                    sx={{
                                        height: 180,
                                        width: "100%",
                                        objectFit: "cover",
                                        filter: "brightness(0.9)",
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        sx={{
                                            color: palette.clay,
                                            textAlign: "center",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {srv.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    sx={{
                        mt: 10,
                        textAlign: "center",
                        background: `linear-gradient(135deg, ${palette.bronze} 0%, ${palette.sand} 90%)`,
                        p: { xs: 4, md: 6 },
                        borderRadius: 4,
                        boxShadow: "0 10px 30px rgba(173,148,107,0.3)",
                        color: "#fff",
                    }}
                >
                    <Typography variant="h5" fontWeight={700} mb={1}>
                        🤝 Vous cherchez un partenaire fiable pour vos chantiers ?
                    </Typography>
                    <Typography variant="body1" mb={3} sx={{ maxWidth: 700, mx: "auto" }}>
                        EHR met à votre disposition une équipe réactive, qualifiée et à l’écoute de
                        vos impératifs. Ensemble, bâtissons des projets durables et performants.
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/contact")}
                        sx={{
                            backgroundColor: "#fff",
                            color: palette.bronze,
                            px: 4,
                            py: 1,
                            fontWeight: 700,
                            borderRadius: 3,
                            "&:hover": { backgroundColor: "#f8f6f2" },
                        }}
                    >
                        Nous contacter
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
