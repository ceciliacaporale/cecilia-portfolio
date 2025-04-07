import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ["styled-components"]
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
        },
      },
    },
    plugins: [
      {
        name: "load-svg",
        enforce: "pre",
        async load(id) {
          if (id.endsWith(".svg")) {
            return `import { ReactComponent } from '${id}'; export default ReactComponent;`;
          }
        },
      },
    ],
  },
});