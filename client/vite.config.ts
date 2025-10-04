import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Cuanku - Nabung itu seru",
        short_name: "Cuanku",
        start_url: "/",
        display: "standalone",
      },
      strategies: "generateSW",
    }),
  ],
});
