import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.apehub.app',
  appName: 'Ape Hub',
  webDir: 'www',
  bundledWebRuntime: false,
  backgroundColor: '#000000',
  
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#000000',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      splashFullScreen: true,
      splashImmersive: true
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#000000',
      overlaysWebView: false
    },
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#488AFF',
      sound: 'beep.wav'
    }
  },

  ios: {
    contentInset: 'always',
    scheme: 'Ape Hub'
  },

  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined
    },
    backgroundColor: '#000000'
  }
};

export default config;
