const config = {
  content: ["./app/**/*.js", "./components/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "20px", sm: "24px", lg: "48px" },
      screens: { "2xl": "1336px" },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope Variable", "sans-serif"],
        display: ["Manrope Variable", "sans-serif"],
      },
      colors: {
        foreground: "#f5f5f7", ink: "#202020", muted: "#a1a1a6", paper: "#000000",
        surface: "#101010", brand: { DEFAULT: "#ffc107", hover: "#ffd24e" },
        line: "#303030", focus: "#ffc107", portrait: "#202020",
        "tab-line": "#c7c7bf", "tab-hover": "#dfdfd7",
        "dark-line": "#535353", "dark-copy": "#c9c9c9",
        "dark-secondary": "#d2d2d2", "dark-muted": "#bfbfbf",
        input: "#151515", "input-border": "#737373",
      },
      keyframes: { 'product-enter': { from: { transform: 'translateY(24px)' }, to: { transform: 'translateY(0)' } } },
      animation: { 'product-enter': 'product-enter 900ms cubic-bezier(0.16,1,0.3,1) both' },
      boxShadow: { phone: "12px 20px 28px #76560042" },
    },
  },
  plugins: [],
};
export default config;
