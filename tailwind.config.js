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
      gray: {
        light: "#edf2f7",
        default: "#e2e8f0",
        dark: "#2d3748",
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
      blur: "blur(3px)",
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
        custom: "inset 79px 60px 124px -18px rgba(0, 0, 0, 0.1)",
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
