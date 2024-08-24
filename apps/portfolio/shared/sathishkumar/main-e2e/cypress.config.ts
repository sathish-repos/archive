import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run portfolio-shared-sathishkumar-main:serve:development',
        production:
          'nx run portfolio-shared-sathishkumar-main:serve:production',
      },
      ciWebServerCommand:
        'nx run portfolio-shared-sathishkumar-main:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
