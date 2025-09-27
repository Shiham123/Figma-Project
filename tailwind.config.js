export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "639px" },
      tablet: { min: "640px", max: "1023px" },
      laptop: { min: "1024px", max: "1439px" },
      desktop: { min: "1440px" },
    },
    extend: { fontFamily: { Poppins: ["Poppins", "sans-serif"] } },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
