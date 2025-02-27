import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['features/*.feature'],
  require: ['steps/*.ts'],
  importTestFrom: 'steps/fixtures.ts',
  quotes: 'single',
});

export default defineConfig({
  testDir,
  reporter: [cucumberReporter('html', { outputFile: 'cucumber-report/report.html' })],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});
