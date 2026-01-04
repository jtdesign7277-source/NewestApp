# Development Guide

This guide provides detailed information for developers working on the Ape Hub mobile app.

## Dependencies

### Core Dependencies

#### Capacitor Core
- `@capacitor/core` - Core Capacitor runtime
- `@capacitor/app` - App lifecycle and state management
- Required for all Capacitor apps

#### UI/UX Plugins (Currently Used)
- `@capacitor/status-bar` - Native status bar styling
- `@capacitor/splash-screen` - Launch screen management
- `@capacitor/haptics` - Tactile feedback for user interactions
- `@capacitor/keyboard` - Keyboard behavior and events
- `@capacitor/preferences` - Persistent key-value storage (replaces localStorage)

#### Future Feature Plugins (Not Yet Implemented)
- `@capacitor/local-notifications` - For price alert notifications (future feature)
- `@capacitor/push-notifications` - For tweet/news alerts (future feature)

These are included in the dependencies as specified in the requirements but are not yet implemented in the current version. They can be removed if not needed, or implemented when those features are added.

### Dev Dependencies
- `@capacitor/ios` - iOS platform tools
- `@capacitor/android` - Android platform tools
- `@capacitor/cli` - Capacitor command-line interface
- `typescript` - TypeScript compiler
- `vite` - Development server and build tool

## Architecture

### File Structure
```
www/index.html          - Single-page application with all logic
capacitor.config.ts     - Capacitor configuration
package.json            - Node dependencies
resources/              - App icons and splash screens
ios/                    - iOS native project (generated)
android/                - Android native project (generated)
```

### App Flow
1. **Initialization** (`initCapacitor()`)
   - Detects if running as native app
   - Configures status bar
   - Hides splash screen
   - Sets up Android back button handler
   - Initializes keyboard listeners

2. **App Startup** (`initApp()`)
   - Loads game state from Preferences
   - Updates UI
   - Fetches stock prices
   - Sets up auto-refresh timer

3. **User Interactions**
   - Add stock → Fetch price → Save to Preferences → Gain XP
   - Remove stock → Update Preferences → Update UI
   - Pull to refresh → Fetch all prices → Update UI

### Storage Strategy

**Web Version**: Uses localStorage
**Native Version**: Uses Capacitor Preferences

The app automatically detects the platform and uses the appropriate storage method via helper functions:
- `getStorageItem(key)` - Retrieves data
- `setStorageItem(key, value)` - Stores data

### API Integration

**Finnhub Stock API**
- Endpoint: `https://finnhub.io/api/v1/quote`
- Authentication: API key in query parameter
- Rate limits: Demo key is limited, production key needed for deployment
- Response: Current price, change, and change percentage

## Development Workflow

### Making Changes to Web Assets

1. Edit `www/index.html`
2. Test in browser: `npm run dev`
3. Sync to native platforms: `npm run sync`
4. Test on simulators/devices

### Adding New Features

#### Example: Add Share Feature

1. **Install plugin**
   ```bash
   npm install @capacitor/share
   ```

2. **Import in HTML** (in the script module section)
   ```javascript
   import { Share } from 'https://cdn.jsdelivr.net/npm/@capacitor/share@6.0.0/dist/esm/index.js';
   window.CapacitorPlugins.Share = Share;
   ```

3. **Use in code**
   ```javascript
   async function shareHoldings() {
     if (window.Capacitor?.isNativePlatform()) {
       await window.CapacitorPlugins.Share.share({
         title: 'My Stock Holdings',
         text: `I'm tracking ${gameState.holdings.length} stocks on Ape Hub!`,
         url: 'https://apehub.app',
       });
     }
   }
   ```

4. **Sync to platforms**
   ```bash
   npm run sync
   ```

### Testing Native Features

Some features only work on native platforms:
- **Haptics** - Requires physical device with haptic engine
- **Status Bar** - Only visible on native apps
- **Preferences** - Works on web but uses different storage
- **Keyboard events** - More reliable on native

#### Testing on iOS Simulator
```bash
npm run open:ios
# Select iPhone 15 Pro in Xcode
# Click Play
```

#### Testing on Android Emulator
```bash
npm run open:android
# Select Pixel 7 in Android Studio
# Click Play
```

#### Testing on Physical Device
**iOS**:
1. Connect device via USB
2. Open Xcode: `npm run open:ios`
3. Select your device
4. Trust the developer certificate on device
5. Click Play

**Android**:
1. Enable USB Debugging on device
2. Connect via USB
3. Open Android Studio: `npm run open:android`
4. Select your device
5. Click Play

## Debugging

### Browser DevTools
```bash
npm run dev
# Open http://localhost:3000
# Press F12 for DevTools
```

### iOS Safari Web Inspector
1. Run app on simulator
2. Open Safari on Mac
3. Develop → [Simulator] → Ape Hub

### Android Chrome DevTools
1. Run app on emulator/device
2. Open Chrome on PC
3. Navigate to `chrome://inspect`
4. Click "Inspect" under Ape Hub

### Native Console Logs
**iOS**: View in Xcode console (bottom panel)
**Android**: View in Android Studio Logcat (bottom panel)

## Common Development Tasks

### Update App Icon
```bash
# Replace resources/icon.svg (1024x1024)
npm install -g @capacitor/assets
npx @capacitor/assets generate
npm run sync
```

### Update Splash Screen
```bash
# Replace resources/splash.svg (2732x2732)
npx @capacitor/assets generate
npm run sync
```

### Add New Stock Data Provider
Currently uses Finnhub. To add another provider:

1. Create new fetch function:
   ```javascript
   async function fetchStockPriceAlternative(symbol) {
     const response = await fetch(`https://api.provider.com/${symbol}`);
     const data = await response.json();
     return {
       price: data.price,
       change: data.change,
       changePercent: data.changePercent
     };
   }
   ```

2. Update `addHolding()` to try fallback:
   ```javascript
   let priceData = await fetchStockPrice(symbol);
   if (!priceData) {
     priceData = await fetchStockPriceAlternative(symbol);
   }
   ```

### Modify XP System
Current: 10 XP per stock, 100 XP per level

To change:
```javascript
// In gainXP() function
const XP_PER_STOCK = 10;      // Change this
const XP_PER_LEVEL = 100;     // Change this

// In addHolding()
await gainXP(XP_PER_STOCK);

// In updateUI()
const xpForNextLevel = gameState.level * XP_PER_LEVEL;
```

## Build for Production

### iOS Production Build
```bash
# 1. Update version in Xcode
npm run open:ios
# Product → Archive
# Distribute App → App Store Connect
```

### Android Production Build
```bash
# 1. Create keystore (first time only)
cd android
keytool -genkey -v -keystore apehub.keystore -alias apehub -keyalg RSA -keysize 2048 -validity 10000

# 2. Build release
npm run open:android
# Build → Generate Signed Bundle
# Select release variant
```

## Security Considerations

### API Keys
- Never commit production API keys
- Use environment variables or secure vaults
- Rotate keys periodically
- Monitor API usage

### User Data
- All data stored locally (Preferences)
- No backend server (currently)
- No personal information collected
- Stock symbols and XP only

### Network Requests
- Use HTTPS only (configured in capacitor.config.ts)
- Validate API responses
- Handle errors gracefully
- Implement rate limiting

## Performance Optimization

### Current Optimizations
- Auto-refresh every 60 seconds (prevents excessive API calls)
- Single HTML file (no network requests for assets)
- CDN imports for Capacitor (cached by browser)
- Minimal animations (GPU-accelerated CSS)

### Future Optimizations
- [ ] Implement service worker for offline support
- [ ] Cache stock prices in Preferences
- [ ] Lazy load Capacitor plugins
- [ ] Optimize confetti particle count
- [ ] Add image compression for icons

## Troubleshooting

### Build Fails
**Symptom**: Xcode/Android Studio shows errors
**Solutions**:
- Clean build folder
- Delete `ios/App/Pods`, run `pod install`
- Delete `android/build`, rebuild
- Update Capacitor: `npm update`

### App Crashes on Launch
**Symptom**: White screen or immediate crash
**Solutions**:
- Check console for JavaScript errors
- Verify all Capacitor plugins are installed
- Run `npm run sync` to ensure latest web assets
- Clear app data and reinstall

### Prices Don't Load
**Symptom**: Stocks added but show no price
**Solutions**:
- Check internet connection
- Verify Finnhub API key is valid
- Check browser console for CORS errors
- Try different stock symbol

### Haptics Don't Work
**Symptom**: No vibration on actions
**Solutions**:
- Test on physical device (simulators may not support)
- Check device haptic settings enabled
- Verify Haptics permission granted
- Check console for haptic errors

## Contributing

### Code Style
- Use async/await for asynchronous operations
- Add comments for complex logic
- Follow existing naming conventions
- Keep functions small and focused

### Testing Checklist
- [ ] Tested on iOS simulator
- [ ] Tested on Android emulator
- [ ] Tested on physical iOS device
- [ ] Tested on physical Android device
- [ ] Tested in web browser
- [ ] No console errors
- [ ] All haptics work
- [ ] Pull-to-refresh works
- [ ] XP system works
- [ ] Storage persists after restart

### Pull Request Process
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Update documentation if needed
5. Submit PR with description
6. Address review comments

## Resources

### Official Documentation
- [Capacitor Docs](https://capacitorjs.com/docs)
- [iOS Development](https://developer.apple.com/documentation/)
- [Android Development](https://developer.android.com/docs)
- [Finnhub API](https://finnhub.io/docs/api)

### Community
- [Capacitor Discord](https://discord.com/invite/UPYYRhtyzp)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/capacitor)
- [GitHub Discussions](https://github.com/ionic-team/capacitor/discussions)

### Tools
- [Xcode](https://developer.apple.com/xcode/)
- [Android Studio](https://developer.android.com/studio)
- [VS Code](https://code.visualstudio.com/)
- [Capacitor VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ionic.capacitor-vscode-extension)

---

Questions? Open an issue on GitHub!
