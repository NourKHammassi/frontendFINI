import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  Avatar,
  useMediaQuery,
  useTheme,
  MenuItem,
  Slide,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUser, logoutAsync } from "../../../features/auth/AuthSlice";
import { selectUserInfo } from "../../user/UserSlice";

const palette = {
  olive: "#4B6043",
  darkOlive: "#556E51",
  stone: "#F0F1EB",
  text: "#1F1F1F",
};

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = React.useState(false);
  const loggedInUser = useSelector(selectLoggedInUser);
  const userInfo = useSelector(selectUserInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navLinks = [
    { name: "Accueil", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Réalisations", to: "/realisations" },
  ];

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: `linear-gradient(to bottom, ${palette.stone}EE, ${palette.stone})`,
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid rgba(0,0,0,0.05)`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, md: 6 },
            py: { xs: 0.5, md: 1 },
            minHeight: { xs: 58, md: 70 },
          }}
        >
          {/* LOGO */}
          <Box
            component={motion.div}
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 1.5,
                background: palette.olive,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
                FP
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, color: palette.text, fontSize: 16 }}>
                FINI PRO
              </Typography>
              <Typography
                sx={{ fontSize: 11, color: "rgba(31,31,31,0.55)", lineHeight: 1 }}
              >
                Finition & Rénovation
              </Typography>
            </Box>
          </Box>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: 14,
                    color: palette.text,
                    fontFamily: "Inter, sans-serif",
                    "&:hover": {
                      color: palette.olive,
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {link.name}
                </Button>
              ))}

              {/* Connexion / Déconnexion */}
              {loggedInUser ? (
                <>
                  <Avatar
                    src={userInfo?.avatar}
                    sx={{ width: 36, height: 36, bgcolor: palette.olive, cursor: "pointer" }}
                    onClick={() => navigate("/profile")}
                  />
                  <Button
                    onClick={handleLogout}
                    sx={{
                      backgroundColor: palette.olive,
                      color: "#fff",
                      textTransform: "none",
                      px: 2.5,
                      py: 0.7,
                      borderRadius: 1.5,
                      fontWeight: 600,
                      fontSize: 13,
                      "&:hover": { backgroundColor: palette.darkOlive },
                    }}
                  >
                    Déconnexion
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => navigate("/login")}
                    sx={{
                      backgroundColor: palette.olive,
                      color: "#fff",
                      textTransform: "none",
                      px: 2.5,
                      py: 0.7,
                      borderRadius: 1.5,
                      fontWeight: 600,
                      fontSize: 13,
                      "&:hover": { backgroundColor: palette.darkOlive },
                    }}
                  >
                    Connexion
                  </Button>
                  <Button
                    onClick={() => navigate("/demanderDevis")}
                    sx={{
                      backgroundColor: palette.olive,
                      color: "#fff",
                      textTransform: "none",
                      px: 2.5,
                      py: 0.7,
                      borderRadius: 1.5,
                      fontWeight: 600,
                      fontSize: 13,
                      "&:hover": { backgroundColor: palette.darkOlive },
                    }}
                  >
                    Devis gratuit
                  </Button>
                </>
              )}
            </Box>
          )}

          {/* MOBILE MENU ICON */}
          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon sx={{ color: palette.text }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE MENU */}
      <Slide direction="down" in={menuOpen} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            background: palette.stone,
            zIndex: 1300,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: palette.text }}>
              FINI PRO
            </Typography>
            <IconButton onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {navLinks.map((link) => (
            <MenuItem
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              sx={{ fontWeight: 600, color: palette.text, fontSize: 15 }}
            >
              {link.name}
            </MenuItem>
          ))}

          <Divider sx={{ my: 1, borderColor: "rgba(0,0,0,0.1)" }} />

          {/* Connexion / Déconnexion */}
          {!loggedInUser ? (
            <Button
              fullWidth
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              sx={{
                backgroundColor: palette.olive,
                color: "#fff",
                borderRadius: 1.5,
                textTransform: "none",
                fontWeight: 600,
                py: 0.8,
                "&:hover": { backgroundColor: palette.darkOlive },
              }}
            >
              Connexion
            </Button>
          ) : (
            <Button
              fullWidth
              onClick={handleLogout}
              sx={{
                backgroundColor: palette.olive,
                color: "#fff",
                borderRadius: 1.5,
                textTransform: "none",
                fontWeight: 600,
                py: 0.8,
                "&:hover": { backgroundColor: palette.darkOlive },
              }}
            >
              Déconnexion
            </Button>
          )}
        </Box>
      </Slide>
    </>
  );
};
