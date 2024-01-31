const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
  tailwindcss: { config: "./tailwindcss-config.js" },
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', //new
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: ["Quicksand", "sans-serif"],
      secondary: ["Montserrat", "sans-serif"],
      tertiary: ["Inter", "sans-serif"],
    },
    // screens: {
    //   "2xl": { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }

    //   xl: { max: "1149px" },
    //   // => @media (max-width: 1149px) { ... }

    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }

    //   mds: { max: "730px" },
    //   // => @media (max-width: 730px) { ... }

    //   sm: { max: "639px" },
    //   // => @media (max-width: 639px) { ... }
    // },

    fontSize: {
      xss: ["12px", "24px"],
      xs: ["14px", "20px"],
      s: ["16px", "20px"],
      default: ["16px", "20px"],
      base: ["18px", "24px"],
      lg: ["20px", "28px"],
      lg1: ["22px", "26px"],
      xl: ["24px", "32px"],
      "tab": ["28px", "30px"],
      "1xl": ["30px", "36px"],
      "2xl": ["36px", "40px"],   
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      lightwhite: "#E2E8F0",
      lighterwhite: "#EEEEEE",
      black: "#000",
      themeblack: "#505050",
      footerblack: "#212B36",
      copyrightblack: "#2E3842",
      red: "#F10821",
      orange: "#F36E31",
      orangedark: "#FEC93D",
      blue: "#055398",
      darkBlue: "#275B80",
      gray: "#CACBCF",
      lightgray: "#D5DAE1",
      lightergray: "#CFD3D6",
      lightblack: "rgba(168, 168, 168, 0.5)",
      lightorange: "#FFAA6D",
      dark: "#202020",
      primary: "#093D62",
      secondary: "#850000",
      pink: "#F1A9C4",
    },
    extend: {
      colors: {}, // Extend Tailwind's default colors
      boxShadow: {
        baseBtnShadow: "0px 2px 16px rgba(0, 0, 0, 0.08)",
        lgBtnShadow: "0px 4px 42px rgba(0, 0, 0, 0.01)",
        outlineBtnShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        menuShadow: "0px 25px 72px rgba(59, 77, 129, 0.08)",
        iconShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.14)",
        slidericonShadow:"0px 0px 8px 0px rgba(48, 86, 211, 0.16)",     
      },
      dropShadow: {
        orange: "0px 0px 8px #FFAA6D",
        orangeMenu: "0px -2px 0px #FFD87C",
      },
      zIndex: {
        "-1": "-1",
        1: "1",
      },
      spacing: {
        3.3: "0.813rem",
        4.5: "1.125rem",
        1.8: "0.438rem",
        2.3: "0.563rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        8.5: "2.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        10.5: "2.625rem",
        10.8: "2.688rem",
        8.8: "2.188rem",
        3.8: "0.938rem",
        800: "80%",
      },
      content: {
        'footer-el1': 'url("../images/footer-element1.svg")',
        'footer-el2': 'url("../images/footer-element2.svg")',
      },
    },
  },
  // plugins: plugins,
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container-1568": {
          maxWidth: "1568px",
          width: "100%",
          padding: "0 16px",
          margin: "0 auto",
          
          "@screen md": {
            padding: "0 33px",
          },
          "@screen lg": {
            padding: "0 16px",
          },
        },
        ".container-1307": {
          maxWidth: "1307px",
          width: "100%",
          padding: "0 16px",
          margin: "0 auto",
          
          "@screen md": {
            padding: "0 33px",
          },
          "@screen lg": {
            padding: "0 16px",
          },
        },
      });
    },
  ],
};
