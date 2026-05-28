export default defineNuxtConfig({
  extends: ["docus"],
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            "bash",
            "json",
            "js",
            "ts",
            "shell",
            "mdc",
            "md",
            "yaml",
            "python",
            "javascript",
          ],
        },
      },
    },
  },
});
