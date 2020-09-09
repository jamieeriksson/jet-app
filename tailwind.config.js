module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      red: "#E76F51",
      yellow: "#E9C46A",
      teal: {
        default: "#2A9D8F",
        dark: "#264653",
      },
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
      gray: {
        light: "#EEEEEE",
        dark: "#313131",
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(2px)",
    },
    extend: {
      spacing: {
        28: "7rem",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        title: ["Fjalla One", "sans-serif"],
      },
      boxShadow: {
        custom: "inset 79px 60px 200px -8px rgba(0, 0, 0, 0.45)",
      },
      margin: {
        84: "20rem",
        96: "24rem",
      },
    },
  },
  variants: {
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },
  plugins: [require("tailwindcss-filters")],
};
