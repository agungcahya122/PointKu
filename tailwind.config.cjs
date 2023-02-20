/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        color1: "#FFFFFF",
        orangeComponent: "#F46801",
        color3: "#222222",
        color4: "#9F9F9F",
        BgSidebar: "#FBFBFB",
        bgSearch: "#F8F5F5",
        bgCard: "#FAF9F9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: false,
  },
};
