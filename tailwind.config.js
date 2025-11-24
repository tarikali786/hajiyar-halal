/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", "'Outfit'", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f2fbf6",
          100: "#dff5e8",
          200: "#b8e7cb",
          300: "#8dd8ae",
          400: "#4fbe83",
          500: "#27a363",
          600: "#1b7f4f",
          700: "#166541",
          800: "#124f34",
          900: "#0d3826",
        },
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(135deg, rgba(15,118,110,0.15), rgba(15,118,110,0)), url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')",
      },
      boxShadow: {
        soft: "0 20px 45px -18px rgba(15,118,110,0.35)",
        card: "0 15px 45px rgba(15,118,110,0.12)",
      },
    },
  },
  plugins: [],
};
