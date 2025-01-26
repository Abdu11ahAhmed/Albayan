/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/pages/*.html", "./public/javascript/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1564px",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        DEFAULT: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1300px",
      },
    },
    extend: {
      fontFamily: {
        AvertaCY: ["Averta"],
      },
    },
  },
  plugins: [],
};
