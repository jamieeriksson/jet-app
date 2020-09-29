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
        bright: "#2A9D8F",
        default: "#314E4A",
        dark: "#264653",
      },
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
      gray: {
        light: "#EEEEEE",
        medium: "#7B7B7B",
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
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    flexGrow: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      10: 10,
    },
    backdropFilter: {
      none: "none",
      "blur-light": "blur(2px)",
      "blur-med": "blur(4px)",
      "blur-lg": "blur(6px)",
      "blur-xl": "blur(8px)",
    },
    rotate: {
      4: "3.8deg",
      45: "-45deg",
    },
    gridTemplateColumns: {
      "sm-1": "14rem",
      "sm-2": "14rem 14rem",
      "sm-4": "14rem 14rem 14rem 14rem",
      "md-1": "18rem",
      "md-2": "18rem 18rem",
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
    filter: ["responsive"],
    backdropFilter: ["responsive"],
  },
  plugins: [require("tailwindcss-filters"), require("tailwindcss-textshadow")],
};
