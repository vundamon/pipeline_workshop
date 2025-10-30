import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin.js';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'build/cypress',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveJson: true,
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
    supportFile: 'cypress/support/e2e.ts',
  },
  video: false,
});
