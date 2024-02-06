/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "footer": "#441f5d",
        "navLinks": "#828282",
        "navborder": " #FFEAD2",
        "globalborder": "#E0E0E0",
        "featurebg": "#FFF5E9",
        "featuretext": "#FF951D",
        "greyblk": "#E0E0E0",
        "greyText": "#828282",
        "heart": "#D20653"
      }
    },
  },
  plugins: [],
};
