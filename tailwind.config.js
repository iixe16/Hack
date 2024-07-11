module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        __: "#61a2d8",
        black: { 900: "#000000", "900_3f": "#0000003f" },
        blue: {
          50: "#e0ecfa",
          100: "#c7daff",
          300: "#61a3d9",
          400: "#439be2",
          800: "#337bb4",
          "100_01": "#cfdffc",
          "300_01": "#72b4ea",
          "50_01": "#e7f1f9",
          "50_02": "#d3e5fc",
          a100_01: "#78baee",
        },
        blue_gray: { "400_00": "#7d889600" },
        cyan: { 400: "#30cfd0", a400: "#00d1ff", a400_01: "#00cbff" },
        indigo: {
          400: "#4c89bc",
          500: "#47649d",
          600: "#2d6591",
          700: "#29608c",
          800: "#24557c",
          "700_01": "#285d88",
          a200: "#5f66e9",
        },
        light_blue: { 100: "#a9dbf1" },
        purple: { a700: "#ad00ff" },
        red: { 300: "#b26767" },
        white: { a700: "#ffffff" },
        yellow: { a200: "#faff1d" },
      },
      boxShadow: { xs: "0 4px 4px 0 #0000003f", sm: "0 12px 19px 0 #0000003f", md: "0 1.85px 1px 0 #0000003f" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #439be2,#24557c)",
        gradient1: "linear-gradient(90deg, #e7f1f9,#cfdffc)",
        gradient2: "linear-gradient(180deg, #72b4ea,#337bb4)",
        gradient3: "linear-gradient(270deg, #c7daff,#e7f1f9)",
        gradient4: "linear-gradient(90deg, #7d889600,#e7f1f9)",
        gradient5: "linear-gradient(90deg, #7d889600,#d3e5fc)",
        gradient6: "linear-gradient(132deg, #78baee,#29608c)",
      },
      fontFamily: { almarai: "Almarai", poppins: "Poppins", inter: "Inter", montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};