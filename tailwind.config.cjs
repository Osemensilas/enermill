/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        neutralLight: "var(--neutralLight)",
        neutralDark: "var(--neutralDark)",
        offBlack: "var(--offBlack)",
        danger: "var(--danger)",
        grey: "grey",
        background: "var(--background)"
      }
    },
  },
  plugins: [],
}

