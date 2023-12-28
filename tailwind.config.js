// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        accent: {
          100: "#13d0cb",
        },
      },
      fontFamily: {
        regular: "Lato-Regular",
        light: "Lato-Light",
        italic: "Lato-Italic",
        bold: "Lato-Bold",
        boldItalic: "Lato-BoldItalic",
      },
    },
  },
  plugins: [],
};
