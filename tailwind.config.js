/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#0F172A",
        "primary-hover": "#020617",

        secondary: "#10B981",
        "secondary-hover": "#059669",
        background: "#CBD5E1",
        surface: "#F1F5F9",

        text: "#1E293B",
        muted: "#64748B",

        borderColor: "#CBD5E1",

        success: "#10B981",
        accent: "#0D9488",

        error: "#DC2626",
      },
    },
  },
  plugins: [],
};
