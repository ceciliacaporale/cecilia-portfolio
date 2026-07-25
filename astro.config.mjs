import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', {
            ssr: true,
            displayName: true,
            preprocess: false
          }]
        ]
      }
    }),
    mdx()
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
    },
  },
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