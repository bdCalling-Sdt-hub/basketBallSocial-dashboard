import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    // host: "192.168.10.20",
    host: "139.59.0.25",
    port: 5005,
  },
});
