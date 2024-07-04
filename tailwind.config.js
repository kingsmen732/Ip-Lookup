/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
        About :["Playfair Display", "serif"]
      },
      colors: {
        AAprimary: "#15161a",
        AAsecondary: "#66fcf1",
        AAtertiary: "#282a2e",
        ResumeButtonHover: "#3a98cf",
        MobileNavBarColor: "#282a2e",
        StartupBackground: "#181a1c",
      },
    },
  },
  plugins: [], 
  variants: {
    scrollbar: ["rounded"],
  },
};