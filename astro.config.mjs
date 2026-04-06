import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [sitemap()],
  adapter: cloudflare()
});