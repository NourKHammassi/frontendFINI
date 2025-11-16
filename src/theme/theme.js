import { createTheme } from "@mui/material/styles";

// 🔹 Completely new theme: dark, modern, and cohesive
export const theme = createTheme({
  palette: {
    mode: "light", // or "dark" for a full dark mode
    primary: {
      main: "#2B3A2F",       // deep olive green
      light: "#A3B18A",      // soft highlight
      dark: "#1C251A",       // shadow/hover
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F9F6F2",       // warm stone for background/secondary
      contrastText: "#2B3A2F",
    },
    error: { main: "#DB4444" },
    warning: { main: "#F2A365" },
    info: { main: "#6C7A89" },
    success: { main: "#6AA84F" },
    text: {
      primary: "#1F1F1F",
      secondary: "#555555",
      disabled: "#999999",
    },
    background: {
      default: "#F3F4F1",
      paper: "#FFFFFF",
    },
    divider: "rgba(0,0,0,0.08)",
  },

  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },

  typography: {
    // fontFamily: ["Inter", "Lora", "Segoe UI", "sans-serif"].join(","),

    h1: {
      fontSize: "5rem",
      fontWeight: 900,
      letterSpacing: "-0.02em",
      color: "#2B3A2F",
      textTransform: "uppercase",
      "@media (max-width:960px)": { fontSize: "4rem" },
      "@media (max-width:600px)": { fontSize: "3rem" },
    },
    h2: {
      fontSize: "3.2rem",
      fontWeight: 700,
      letterSpacing: "-0.015em",
      color: "#2B3A2F",
      "@media (max-width:960px)": { fontSize: "2.5rem" },
      "@media (max-width:600px)": { fontSize: "1.9rem" },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#2B3A2F",
      "@media (max-width:960px)": { fontSize: "1.7rem" },
      "@media (max-width:600px)": { fontSize: "1.4rem" },
    },
    h4: {
      fontSize: "1.6rem",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#2B3A2F",
      "@media (max-width:960px)": { fontSize: "1.3rem" },
      "@media (max-width:600px)": { fontSize: "1.1rem" },
    },
    h5: {
      fontSize: "1.3rem",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#3C4A3B",
      "@media (max-width:960px)": { fontSize: "1.1rem" },
      "@media (max-width:600px)": { fontSize: "1rem" },
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: 500,
      letterSpacing: "0.01em",
      color: "#3C4A3B",
      "@media (max-width:960px)": { fontSize: "1rem" },
      "@media (max-width:600px)": { fontSize: "0.9rem" },
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.7,
      color: "#3C4A3B",
      "@media (max-width:600px)": { fontSize: "0.95rem" },
    },
    body2: {
      fontSize: "0.95rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#555555",
    },
    button: {
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "#FFFFFF",
    },
  },

  shape: {
    borderRadius: 12, // rounded corners across the site
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "12px 28px",
          // fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          textTransform: "uppercase",
          transition: "all 0.25s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            backgroundColor: "#1C251A",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F1",
          boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#2B3A2F",
        },
      },
    },
  },
});

export default theme;
