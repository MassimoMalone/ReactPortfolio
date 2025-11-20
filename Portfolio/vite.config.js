// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Add this section to ensure a single instance of React is used
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
