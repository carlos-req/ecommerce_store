/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        primary200: "var(--primary200)",
        subtitle: "var(--subtitle)",
        secondary: "var(--secondary)",
        ctabutton: "var(--ctabutton)",
        ctaborder: "var(--ctaborder)",
        footersecondary: "var(--footersecondary)",
      },
    },
  },
  plugins: [],
};
