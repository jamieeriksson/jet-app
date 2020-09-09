module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
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
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
