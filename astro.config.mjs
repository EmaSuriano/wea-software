import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://emasuriano.github.io",
  base: "wea-software",
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" })],
});
