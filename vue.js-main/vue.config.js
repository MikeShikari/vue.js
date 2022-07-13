const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    dashboard: {
      entry: "./src/pages/Dashboard/main.js",
      template: "public/index.html",
      title: "Dashboard",
      chunks: ["chunk-vendors", "chunk-common", "dashboard"],
    },
    test_runner: {
      entry: "./src/pages/Runner/main.js",
      template: "public/index.html",
      title: "Test Runner",
      chunks: ["chunk-vendors", "chunk-common", "test_runner"],
    },
  },
});
