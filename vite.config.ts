import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 8080,
    open: true,
  },
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
      },
    }),
    viteTsconfigPaths(),
    VitePWA({
      srcDir: 'public',
      filename: 'service-worker.js',
      strategies: 'injectManifest',
      injectRegister: false,
      devOptions: {
        enabled: true,
      },
      manifest: false,
      injectManifest: {
        injectionPoint: undefined,
      },
    }),
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, "./src/"),
    },
  },
  build: {
    rollupOptions: {
      cache: true,
      input: {
        main: resolve(__dirname, "index.html"),
      },
      plugins: [],
      output: {
        manualChunks(id) {
          if (id.includes("@mui")) {
            return "mui";
          }
          if (id.includes("lodash")) {
            return "lodash";
          }
          if (
            id.includes("date-fns") ||
            id.includes("moment") ||
            id.includes("dayjs")
          ) {
            return "date-time";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {},
});
