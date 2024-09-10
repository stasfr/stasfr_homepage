import daisyui from "daisyui";

module.exports = {
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        textLight: "#f0f2f5",
        textDark: "#213547",
        background: "#1a1a1a",
        backgroundLight: "#f0e7db",
        primary: "#42d392",
        secondary: "#083b2c",
        btnHover: "#22886a",
        border: "#404040",
      },
    },
  },
  plugins: [daisyui],
};
