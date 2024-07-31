/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gris: {
          DEFAULT: "#DFDFDF",
        },
        blanco: {
          DEFAULT: "#FFFFFF",
        },
        rojo: {
          DEFAULT: "#C42626",
        },
        Titulos: {
          DEFAULT: "#231F20",
        },
        Parrafos: {
          DEFAULT: "#251F21",
        },
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
