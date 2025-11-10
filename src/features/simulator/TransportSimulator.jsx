// src/components/TransportSimulator.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import camionIMG from "../../assets/images/camion.png";
import colisIMG from "../../assets/images/colis.jpg"; // ton image uploadée

const forfaits = [
  { weight: 0.25, price: 6.26 },
  { weight: 1.0, price: 8.54 },
  { weight: 5.0, price: 12.38 },
  { weight: 10.0, price: 16.61 },
  { weight: 30.0, price: 33.88 },
];

const TransportSimulator = ({
  pricePerKm = 2.5,
  pricePerKg = 0.5,
  maxDistance = 100,
}) => {
  const [mode, setMode] = useState("dynamic"); // default mode
  const [distance, setDistance] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [selectedForfait, setSelectedForfait] = useState(null);
  const progressRef = useRef(null);
  const controls = useAnimation();

  const kgToNumber = (val) => parseFloat(val) || 0;

  // Resize progress bar
  useEffect(() => {
    if (progressRef.current) setBarWidth(progressRef.current.offsetWidth);
    const handleResize = () => {
      if (progressRef.current) setBarWidth(progressRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcul prix dynamique
  useEffect(() => {
    if (mode === "dynamic") {
      const km = parseInt(distance) || 0;
      const kg = parseFloat(weight) || 0;
      setPrice(km * pricePerKm + kg * pricePerKg);

      const progressPercent = Math.min((km / maxDistance) * 100, 100);
      const camionX = (progressPercent / 100) * barWidth - 25;
      controls.start({ x: camionX });
    }
    if (mode === "forfaits") {
      const kg = kgToNumber(weight);
      const found = forfaits.find((f) => kg <= f.weight);
      setSelectedForfait(found || forfaits[forfaits.length - 1]);
    }
  }, [distance, weight, barWidth, controls, mode]);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value.replace(/^0+(?=\d)/, ""));
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value.replace(/^0+(?=\d)/, ""));
  };

  const boxHeight = selectedForfait
    ? (selectedForfait.weight / 40) * 150 + 50
    : 50; // 40kg max for forfaits

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Simulateur de PERFECT TRANSPORT
      </Typography>

      {/* Choix du mode */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button
          variant={mode === "dynamic" ? "contained" : "outlined"}
          onClick={() => setMode("dynamic")}
        >
          Mode dynamique
        </Button>
        <Button
          variant={mode === "forfaits" ? "contained" : "outlined"}
          onClick={() => setMode("forfaits")}
        >
          Mode forfaits
        </Button>
      </Box>

      {/* Inputs */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
        {mode === "dynamic" && (
          <>
            <TextField
              label="Distance (km)"
              type="number"
              value={distance}
              onChange={handleDistanceChange}
              sx={{ width: 150 }}
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}
            />
            <TextField
              label="Poids (kg)"
              type="number"
              value={weight}
              onChange={handleWeightChange}
              sx={{ width: 150 }}
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}
            />
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              Prix estimé: <strong>{price.toFixed(2)} €</strong>
            </Typography>
          </>
        )}

        {mode === "forfaits" && (
          <>
            <TextField
              label="Poids (kg)"
              type="number"
              value={weight}
              onChange={handleWeightChange}
              sx={{ width: 150 }}
              InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              }}
            />
          </>
        )}
      </Box>

      {/* Mode dynamique avec camion */}
      {mode === "dynamic" && (
        <Box sx={{ position: "relative", height: 50 ,marginTop:"5%"}} ref={progressRef}>
          <LinearProgress
            variant="determinate"
            value={Math.min(((parseInt(distance) || 0) / maxDistance) * 100, 100)}
            sx={{ height: 10, borderRadius: 5 }}
          />
          <motion.div
            animate={controls}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{ position: "absolute", top: -20 }}
          >
            <img src={camionIMG} alt="camion" style={{ width: 50 }} />
          </motion.div>
        </Box>
      )}

      {/* Mode forfaits */}
{/* Mode forfaits */}
{mode === "forfaits" && (
  <>
    {/* Note affichée seulement si poids ≥ 40 */}
    {kgToNumber(weight) >= 40 && (
      <Typography color="red" sx={{ mb: 2 }}>
        Note : Ce mode est conçu pour les colis ≤ 40 kg.
      </Typography>
    )}

    {selectedForfait && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: 3,
            mt: 2,
          }}
        >
          {/* Carré jaune fixe */}
          <Box
            sx={{
              width: 150,
              height: 50,
              background: "#FFA500",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {selectedForfait.price} € HT
          </Box>

          {/* Box/image qui change de taille selon le poids */}
          <motion.div
            animate={{
              scale: Math.min(kgToNumber(weight) / 10, 3), // ajuste max scale si tu veux
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft:"50px"
            }}
          >
            <img
              src={colisIMG}
              alt="colis"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </motion.div>
        </Box>
      </motion.div>
    )}
  </>
)}


    </Container>
  );
};

export default TransportSimulator;
