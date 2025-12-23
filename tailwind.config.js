/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir Next", "Montserrat", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px", // Nav links
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        nav: "0.9px", // Nav links letter spacing
      },
      colors: {
        primary: "#4f46e5",
        dark: "#26262B", // Body background
        white: "#FFFFFF", // Text color
      },
    },
  },
  plugins: [],
};
