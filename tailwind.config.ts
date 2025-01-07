import { Config } from "tailwindcss";

export default <Config>{
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@shadcn/ui/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", 
        accent: "#22C55E", 
      },
    },
  },
  plugins: [],
};

