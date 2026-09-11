import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  let outDir = 'dist' // default

  if (mode === 'prod') {
    outDir = '/var/www/profile-blug'
  }

  return {
    plugins: [react(), tailwindcss()],
    build: {
      outDir,
    },
  }
});
