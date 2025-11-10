import { createTheme } from "@mui/material/styles";

// 🎨 Palette originale gardée
export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#ffffff",
      dark: "#DB4444",
      customBlack: "#191919",
    },
    secondary: {
      main: "#background.paper",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  typography: {
    // 🖋 Nouvelle typographie : "Outfit" + "Lora" (design architectural + élégance fine)
    fontFamily: [
      "Outfit",
      "Lora",
      "Segoe UI",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),

    // Petits ajustements de style
    h1: {
      fontSize: "5.5rem",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      "@media (max-width:960px)": { fontSize: "4rem" },
      "@media (max-width:600px)": { fontSize: "3rem" },
      "@media (max-width:414px)": { fontSize: "2.2rem" },
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 700,
      letterSpacing: "-0.015em",
      "@media (max-width:960px)": { fontSize: "2.8rem" },
      "@media (max-width:600px)": { fontSize: "2.2rem" },
    },
    h3: {
      fontSize: "2.4rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      "@media (max-width:960px)": { fontSize: "2rem" },
      "@media (max-width:600px)": { fontSize: "1.6rem" },
    },
    h4: {
      fontSize: "1.9rem",
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (max-width:960px)": { fontSize: "1.5rem" },
      "@media (max-width:600px)": { fontSize: "1.25rem" },
    },
    h5: {
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: 1.4,
      "@media (max-width:960px)": { fontSize: "1.2rem" },
      "@media (max-width:600px)": { fontSize: "1.05rem" },
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 500,
      letterSpacing: "0.01em",
      "@media (max-width:960px)": { fontSize: "1rem" },
      "@media (max-width:600px)": { fontSize: "0.9rem" },
    },
    body1: {
      fontSize: "1.05rem",
      fontWeight: 400,
      lineHeight: 1.7,
      color: "rgba(25,25,25,0.9)",
      "@media (max-width:600px)": { fontSize: "0.95rem" },
    },
    body2: {
      fontSize: "0.95rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "rgba(25,25,25,0.75)",
    },
    button: {
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          padding: "10px 22px",
          fontFamily: "Outfit, sans-serif",
          "&:hover": {
            transform: "translateY(-1px)",
            transition: "all 0.25s ease",
          },
        },
      },
    },
  },
});

export default theme;
