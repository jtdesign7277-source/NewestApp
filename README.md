# Stock Portfolio - Robinhood Style

A mobile-ready stock and finance application with a Robinhood-inspired design and feel.

## Features

- 📱 **Mobile-First Design**: Optimized for mobile devices with touch-friendly interactions
- 📊 **Portfolio Overview**: View your total portfolio value with daily changes
- 📈 **Mini Chart**: Visual representation of portfolio performance
- 💼 **Stock Holdings**: Track your stock positions with real-time prices and changes
- 👁️ **Watchlist**: Monitor stocks you're interested in
- 🎨 **Robinhood-Inspired UI**: Clean, modern dark theme with signature green accents
- 🔔 **Sticky Navigation**: Bottom navigation bar for easy access on mobile

## Design Highlights

- **Dark Theme**: Black background (#000000) for OLED displays
- **Color Scheme**: 
  - Green (#00c805) for positive changes
  - Red (#ff3b30) for negative changes
  - Subtle borders and cards for clean separation
- **Typography**: System fonts for native feel on all devices
- **Responsive**: Adapts to all screen sizes from mobile to desktop

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
# 🦍 Ape Hub - Mobile Stock Tracker

A gamified stock tracking mobile app built with Capacitor, ready for deployment to iOS App Store and Google Play Store.

## Features

- 📈 Real-time stock price tracking using Finnhub API
- 🎮 Gamification with XP system and level progression
- 🎉 Confetti animations and haptic feedback
- 📱 Native iOS and Android support
- 💾 Persistent storage using Capacitor Preferences
- 🔄 Pull-to-refresh functionality
- 🎨 Safe area support for notched devices
- ⚡ Optimized touch targets for mobile (min 44px)

## Prerequisites

Before you begin, ensure you have the following installed:

### Required for All Platforms
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager

### Required for iOS Development
- **macOS** (required for iOS development)
- **Xcode** (v14 or higher) - [Download from Mac App Store](https://apps.apple.com/us/app/xcode/id497799835)
- **Xcode Command Line Tools**: Run `xcode-select --install`
- **CocoaPods**: Run `sudo gem install cocoapods`
- **Apple Developer Account** (for App Store deployment)

### Required for Android Development
- **Android Studio** (latest version) - [Download](https://developer.android.com/studio)
- **Android SDK** (API level 22 or higher)
- **Java Development Kit (JDK)** 17 or higher
- **Google Play Developer Account** (for Play Store deployment)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jtdesign7277-source/NewestApp.git
   cd NewestApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   **Note**: You may see moderate severity warnings related to esbuild/vite. These are development-only dependencies and do not affect the production app. The vulnerabilities relate to the development server and are not present in the compiled iOS/Android apps.

3. **Configure Finnhub API Key** (Optional - uses demo key by default)
   
   Edit `www/index.html` and replace the API key:
   ```javascript
   const FINNHUB_API_KEY = 'your_api_key_here';
   ```
   
   Get a free API key at [Finnhub.io](https://finnhub.io/)

## Development

### Web Preview (Browser)
Run the app in your browser for quick development:

```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Lint Code
```bash
npm run lint
```

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **ESLint** - Code quality and consistency

## Mobile Optimization

- Touch-optimized buttons and interactive elements
- Viewport meta tags for proper mobile rendering
- Smooth scrolling and animations
- Bottom navigation for thumb-friendly access
- Fixed positioning for key UI elements

## License

MIT
Then open http://localhost:3000 in your browser.

## iOS Development

### Setup iOS Platform

1. **Add iOS platform**
   ```bash
   npm run add:ios
   ```

2. **Sync web assets to iOS**
   ```bash
   npm run sync:ios
   ```

### Run on iOS Simulator

1. **Open Xcode**
   ```bash
   npm run open:ios
   ```

2. **Select a simulator** (e.g., iPhone 15 Pro)

3. **Click the Play button** in Xcode to build and run

### Run on Physical iOS Device

1. Open the project in Xcode: `npm run open:ios`
2. Connect your iOS device via USB
3. Select your device from the device dropdown
4. In Xcode, go to **Signing & Capabilities**
5. Select your **Team** (Apple Developer account)
6. Xcode will automatically provision your device
7. Click Play to build and install on your device

### Build for App Store

1. **Update app information**
   - Edit `capacitor.config.ts` to set your `appId`
   - Update `ios/App/App.xcodeproj` bundle identifier

2. **Configure signing**
   - Open Xcode: `npm run open:ios`
   - Select the project in the navigator
   - Go to **Signing & Capabilities**
   - Select your team and provisioning profile

3. **Create archive**
   - In Xcode, select **Product > Archive**
   - Wait for the archive to complete
   - Click **Distribute App**
   - Follow the wizard to upload to App Store Connect

4. **App Store Connect**
   - Go to [App Store Connect](https://appstoreconnect.apple.com/)
   - Create a new app listing
   - Upload screenshots and metadata
   - Submit for review

## Android Development

### Setup Android Platform

1. **Add Android platform**
   ```bash
   npm run add:android
   ```

2. **Sync web assets to Android**
   ```bash
   npm run sync:android
   ```

### Run on Android Emulator

1. **Create an emulator in Android Studio**
   - Open Android Studio
   - Go to **Tools > Device Manager**
   - Create a new virtual device (e.g., Pixel 7)

2. **Start the emulator**

3. **Open and run the project**
   ```bash
   npm run open:android
   ```
   
4. **Click the Play button** in Android Studio

### Run on Physical Android Device

1. **Enable Developer Options** on your Android device
   - Go to Settings > About Phone
   - Tap "Build Number" 7 times

2. **Enable USB Debugging**
   - Go to Settings > Developer Options
   - Enable "USB Debugging"

3. **Connect device via USB**

4. **Run the app**
   ```bash
   npm run open:android
   ```
   
5. Select your device and click Play in Android Studio

### Build for Google Play Store

1. **Create a keystore** (first time only)
   ```bash
   cd android
   keytool -genkey -v -keystore apehub-release.keystore -alias apehub -keyalg RSA -keysize 2048 -validity 10000
   ```
   
   Save the keystore file and passwords securely!

2. **Configure signing**
   
   Create `android/key.properties`:
   ```properties
   storePassword=your_store_password
   keyPassword=your_key_password
   keyAlias=apehub
   storeFile=../apehub-release.keystore
   ```

3. **Build release APK/AAB**
   
   In Android Studio:
   - Go to **Build > Generate Signed Bundle / APK**
   - Select **Android App Bundle** (AAB for Play Store)
   - Choose your keystore
   - Select **release** build variant
   - Click Finish

   Or via command line:
   ```bash
   cd android
   ./gradlew bundleRelease
   ```
   
   The AAB will be in `android/app/build/outputs/bundle/release/`

4. **Upload to Google Play Console**
   - Go to [Google Play Console](https://play.google.com/console)
   - Create a new app
   - Upload your AAB file
   - Fill in store listing details
   - Submit for review

## Syncing Changes

After making changes to `www/` directory:

```bash
# Sync to both platforms
npm run sync

# Or sync individually
npm run sync:ios
npm run sync:android
```

## App Store Assets

### iOS App Store Requirements

#### App Icon Sizes
- 1024x1024px - App Store listing (Required)
- Generated sizes will be created by Xcode from `resources/icon.png`

#### Screenshots (Required for submission)
- iPhone 6.7" Display (1290 x 2796 pixels) - iPhone 15 Pro Max
- iPhone 6.5" Display (1242 x 2688 pixels) - iPhone 11 Pro Max
- iPad Pro 12.9" (2048 x 2732 pixels) - 3rd gen

Recommended: 4-6 screenshots per device size

### Android Play Store Requirements

#### App Icon Sizes
- 512x512px - High-res icon (Required)
- Generated sizes will be created by Android Studio from `resources/icon.png`

#### Screenshots (Required for submission)
- Phone: At least 2 screenshots (max 8)
  - Minimum dimension: 320px
  - Maximum dimension: 3840px
  - Recommended: 1080 x 1920 or 1080 x 2340

- Tablet (Optional): 7" and 10" tablet screenshots
  - 1200 x 1920 or 1600 x 2560

#### Feature Graphic
- 1024 x 500 pixels (Required for featured placement)

### Creating Assets

1. **Replace placeholder icon**
   ```
   Replace resources/icon.svg with a 1024x1024 PNG or SVG
   ```

2. **Replace splash screen**
   ```
   Replace resources/splash.svg with a 2732x2732 PNG or SVG
   ```

3. **Generate icons** (after replacing)
   ```bash
   # Install Capacitor assets tool
   npm install -g @capacitor/assets
   
   # Generate all icon sizes
   npx @capacitor/assets generate
   ```

4. **Take screenshots**
   - Run the app on various simulators/emulators
   - Use native screenshot tools
   - For iOS: Cmd+S in simulator
   - For Android: Screenshot button in emulator toolbar

## App Store Listing Recommendations

### App Name
**Ape Hub - Stock Tracker**

### Subtitle/Short Description
Track stocks with gamification - Gain XP and level up!

### Description
```
Track your favorite stocks with a fun, gamified experience!

🦍 APE HUB FEATURES:
• Real-time stock price tracking
• XP system - gain experience for every action
• Level up and unlock achievements
• Beautiful confetti animations
• Haptic feedback for immersive experience
• Pull-to-refresh for latest prices
• Clean, modern interface
• Powered by Finnhub financial data

📈 HOW IT WORKS:
1. Search for any stock symbol (AAPL, TSLA, GME, etc.)
2. Add to your holdings
3. Watch prices update in real-time
4. Gain XP for each stock you track
5. Level up as you engage with the app!

💎 PERFECT FOR:
• Stock market enthusiasts
• Day traders and investors
• Anyone who wants to make finance fun
• Gamification lovers

Download now and start your journey to the moon! 🚀
```

### Keywords (iOS)
stock tracker, stocks, investing, portfolio, finance, trading, market, gamification, XP, level up

### Category
- iOS: Finance
- Android: Finance

### Age Rating
- iOS: 4+ (or 12+ if you mention trading)
- Android: Everyone

## Troubleshooting

### Common Issues

#### iOS Build Fails
- **Problem**: Code signing error
- **Solution**: Make sure you have a valid Apple Developer account and provisioning profile
- **Solution**: In Xcode, go to Signing & Capabilities and select your team

#### Android Build Fails
- **Problem**: SDK not found
- **Solution**: Open Android Studio and go to Preferences > Android SDK, ensure SDK is installed
- **Solution**: Set `ANDROID_HOME` environment variable

#### App doesn't load on device
- **Problem**: White screen or blank page
- **Solution**: Check browser console for errors
- **Solution**: Run `npm run sync` to ensure latest web assets are copied
- **Solution**: Clear app data and reinstall

#### Haptics not working
- **Problem**: No vibration on button press
- **Solution**: Ensure device has haptic engine (iPhone 7+, most Android devices)
- **Solution**: Check device settings for haptic/vibration enabled

#### Prices not loading
- **Problem**: Stocks show but no prices
- **Solution**: Check internet connection
- **Solution**: Verify Finnhub API key is valid (demo key has rate limits)
- **Solution**: Check browser console for API errors

### Getting Help

- Check [Capacitor Documentation](https://capacitorjs.com/docs)
- Check [Finnhub API Documentation](https://finnhub.io/docs/api)
- Open an issue on GitHub

## Project Structure

```
/
├── www/                      # Web assets directory
│   └── index.html           # Main app HTML with Capacitor integration
├── resources/               # App icons and splash screens
│   ├── icon.svg            # App icon (1024x1024)
│   └── splash.svg          # Splash screen (2732x2732)
├── ios/                     # iOS platform (generated)
├── android/                 # Android platform (generated)
├── package.json            # Node dependencies
├── capacitor.config.ts     # Capacitor configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Configuration

### Capacitor Config (`capacitor.config.ts`)

Key configuration options:
- `appId`: Unique app identifier (e.g., com.apehub.app)
- `appName`: Display name of the app
- `webDir`: Directory containing web assets (www)
- `plugins`: Native plugin configuration

### API Configuration

To use your own Finnhub API key:

1. Sign up at [Finnhub.io](https://finnhub.io/)
2. Get your API key
3. Edit `www/index.html`:
   ```javascript
   const FINNHUB_API_KEY = 'your_api_key_here';
   ```

## Technologies Used

- **Capacitor 6** - Native runtime for web apps
- **Finnhub API** - Real-time stock market data
- **Capacitor Plugins**:
  - Status Bar - Native status bar styling
  - Splash Screen - Launch screen
  - Haptics - Tactile feedback
  - Keyboard - Keyboard management
  - Preferences - Persistent storage
  - App - App lifecycle events
  - Local Notifications - Price alerts (future feature)
  - Push Notifications - Tweet alerts (future feature)

## License

MIT License - See LICENSE file for details

## Support

For support, please open an issue on GitHub or contact the development team.

---

Made with ❤️ by the Ape Hub Team 🦍
