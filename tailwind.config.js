/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#3E3E3E",


      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(167.33deg, #FFFFFF 20.36%, #F1F1F1 88.41%);",
        
      }),
      fontFamily: {
        hindiMadurai: ["Hindi Madurai", "sans-serif"],
        ibarraRealNova: ["Ibarra Real Nova", "sans-serif"],
      },
      content: {
        leftHeroBg: "url('./assets/hero-bg-1.png')",
        rightHeroBg: "url('./assets/hero-bg-2.png')",
        journalBg: "url('./assets/journal-bg.png')",
        contactBg: "url('./assets/contact-bg.png')",

      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },

 
  },
  plugins: [],
}
