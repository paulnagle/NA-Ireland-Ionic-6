import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ie.nasouth.android.naireland',
  appName: 'NA Ireland',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  }
};

export default config;
