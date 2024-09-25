import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.ts", // Ajuste aqui se seus arquivos têm outra extensão, como .test.ts
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
