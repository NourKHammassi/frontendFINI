// Navbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../features/auth/AuthSlice";
import { selectUserInfo } from "../../user/UserSlice";
import { motion } from "framer-motion";

// 🎨 Palette
const bronze = "#AD946B";
const goldBeige = "#ADA06B";
const tan = "#AD846B";
const dark = "#1B1B1B";
const lightBg = "#FCFBF9";

// 🧭 Styled Navbar
const StyledAppBar = styled(AppBar)(() => ({
  background: `linear-gradient(180deg, ${lightBg} 0%, #F8F6F1 100%)`,
  color: dark,
  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
  borderBottom: `1px solid rgba(0,0,0,0.05)`,
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
}));

const NavButton = styled(Button)(() => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: 15,
  color: dark,
  borderRadius: 10,
  padding: "6px 14px",
  "&:hover": {
    backgroundColor: "rgba(173,132,107,0.08)",
  },
}));

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const loggedInUser = useSelector(selectLoggedInUser);
  const userInfo = useSelector(selectUserInfo);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Accueil", to: "/" },
    { name: "Nos Métiers", to: "/services" },
    { name: "Réalisations", to: "/realisations" },
    { name: "Espace Pro", to: "/partenariats" },
    { name: "Actualités", to: "/blog" },
    { name: "Devis & Contact", to: "/demanderDevis" },
  ];


  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 6 },
          py: { xs: 1, md: 1.25 },
        }}
      >
        {/* 🌟 Brand */}
        <Box
          component={motion.div}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              width: 46,
              height: 46,
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${bronze} 0%, ${goldBeige} 90%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 16px rgba(173,148,107,0.25)",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "transparent",
                width: 28,
                height: 28,
                color: "#fff",
                fontWeight: 700,
              }}
            >
              E
            </Avatar>
          </Box>

          <Box>
            <Box
              component="div"
              sx={{ fontWeight: 900, color: dark, fontSize: 18 }}
            >
              EHR
            </Box>
            <Box
              component="div"
              sx={{ fontSize: 12, color: "rgba(27,27,27,0.6)" }}
            >
              Ingénierie & Construction
            </Box>
          </Box>
        </Box>

        {/* 🧭 Links */}
        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            {navLinks.map((link) => (
              <NavButton key={link.to} component={Link} to={link.to}>
                {link.name}
              </NavButton>
            ))}

            {loggedInUser ? (
              <>
                <NavButton
                  component={Link}
                  to="/logout"
                  sx={{
                    background: `linear-gradient(90deg, ${tan}, ${bronze})`,
                    color: "#fff",
                    "&:hover": { opacity: 0.9 },
                  }}
                >
                  Déconnexion
                </NavButton>
              </>
            ) : (
              <NavButton
                onClick={() => navigate("/login")}
                sx={{
                  background: `linear-gradient(90deg, ${bronze}, ${goldBeige})`,
                  color: "#fff",
                  "&:hover": { opacity: 0.9 },
                }}
              >
                Connexion
              </NavButton>
            )}
          </Box>
        ) : (
          <>
            <IconButton
              aria-label="menu"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{ color: dark }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              PaperProps={{
                sx: {
                  bgcolor: "#fff",
                  color: dark,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              {navLinks.map((item) => (
                <MenuItem
                  key={item.to}
                  component={Link}
                  to={item.to}
                  onClick={() => setAnchorEl(null)}
                >
                  {item.name}
                </MenuItem>
              ))}
              {loggedInUser ? (

                <MenuItem
                  component={Link}
                  to="/logout"
                  onClick={() => setAnchorEl(null)}
                >
                  Déconnexion
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                    setAnchorEl(null);
                  }}
                >
                  Connexion
                </MenuItem>
              )}
            </Menu>
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};
