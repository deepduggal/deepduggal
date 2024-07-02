/** @type {import('tailwindcss').Config} */

// Colors, etc for Deep's personal branding
const brand = {
  blue: '#0070f3' // trustable blue
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': brand.blue
      },
      textColor: {
        'brand-blue': brand.blue
      },
      boxShadowColor: {
        'brand-blue': brand.blue
      }
      
    },
  },
  plugins: [],
}

