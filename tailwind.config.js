/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#f2eadf",      // ✅ beige
        darkBg: "#e6ded3",       // ✅ dirtyWhite
        lightText: "#7F5539",    // ✅ darkBrown
        darkText: "#4B3621",     // ✅ espresso
        accentLight: "#BFA27A",  // 🆕 soft camel
        accentDark: "#A8906F",   // 🆕 muted mocha
        subtextLight: "#A97461", // 🆕 warm sienna
        subtextDark: "#D8C4A0",  // 🆕 warm sand    
        highlight: "#CBB994",    // 🆕 soft gold
        backgroundAlt: "#E9DFC4" // 🆕 oatmeal beige
        
      },
      fontFamily: {
        oswald:  ['Poppins', 'sans-serif'],
        playfair: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semi: 600,
        bold: 700,
      },
      fontSize: {
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem", // 32px
        "4xl": "2.5rem", // 40px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px

      },
    },
  },
  plugins: [],
}