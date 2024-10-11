/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Inter_400Regular",
        bold: "Inter_700Bold",
      },
      colors:{
        cblue:{
          dark: "#1E6F9F",
          light: "#4EA8DE"
        },
        cpurple:{
          dark: '#5E60CE',
          light: '#8284FA'
        },
        cgray:{
          700:"#0D0D0D",
          600:"#1A1A1A",
          500:"#262626",
          400:"#333333",
          300:"#808080",
          200:"#D9D9D9",
          100:"#F2F2F2"
        },
        cdanger:{
          light: "#E25858"
        }
      }
    },
  },
  plugins: [],
};
