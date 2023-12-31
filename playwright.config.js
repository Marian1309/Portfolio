import { defineConfig, devices } from '@playwright/test';

const playwrightConfig = defineConfig({
  testDir: './tests',
  testMatch: /.test.ts/,
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});

export default playwrightConfig;
