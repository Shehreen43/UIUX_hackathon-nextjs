import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'], // Use the custom variable
              },
        colors: {
          Prim_blue: '#00B5DA',
          secondary2: '#2DC071',
          background: "var(--background)",
          foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
