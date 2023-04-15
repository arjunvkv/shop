/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#f5f7e7",
        "light-orange": "#e5ac50",
        "light-green": "#dfeddc",
        "dark-green": "#586a57",
      },
    },
  },
  plugins: [],
};
