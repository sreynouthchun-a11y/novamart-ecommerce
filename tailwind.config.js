tailwind.config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#d4af37', // Gold accent for premium feel
          foreground: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
