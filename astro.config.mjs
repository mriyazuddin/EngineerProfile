import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.riyaz.blog",
  trailingSlash: "never",
  build: { format: "file" },
  markdown: { syntaxHighlight: false },
  devToolbar: { enabled: false },
});
