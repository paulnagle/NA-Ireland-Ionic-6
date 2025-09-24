import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ie.nasouth.android.naireland',
  appName: 'NA Ireland',
  webDir: 'www/browser',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    StatusBar: {
      overlaysWebView: false,
      style: 'DARK',
      backgroundColor: "#000090"
   }, 
  },
};

export default config;
