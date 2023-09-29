/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
        "space-mono": "'Space Mono'",
      },
      borderRadius: {
        "lgi-5": "19.5px",
      },
    },
    fontSize: {
      "base-9": "16.9px",
      "2xl-8": "21.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
