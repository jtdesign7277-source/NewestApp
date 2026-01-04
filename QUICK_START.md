# Quick Start Guide

Get Ape Hub running on your device in 5 minutes!

## 🚀 Fastest Path to Testing

### Web Browser (Instant)
```bash
npm install
npm run dev
```
Open http://localhost:3000 in your browser.

### iOS Simulator (5 minutes)
```bash
# Install dependencies
npm install

# Add iOS platform
npm run add:ios

# Open in Xcode
npm run open:ios

# Click Play button in Xcode to run
```

### Android Emulator (5 minutes)
```bash
# Install dependencies
npm install

# Add Android platform
npm run add:android

# Open in Android Studio
npm run open:android

# Click Play button in Android Studio to run
```

## 📱 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Run in browser for development |
| `npm run build` | Build the web app |
| `npm run sync` | Copy web assets to native platforms |
| `npm run sync:ios` | Sync only iOS |
| `npm run sync:android` | Sync only Android |
| `npm run open:ios` | Open Xcode |
| `npm run open:android` | Open Android Studio |

## 🎮 Testing the App

### Try These Features:
1. **Add a stock**: Type "AAPL" and click "Add to Holdings"
2. **Gain XP**: You'll get 10 XP for adding a stock
3. **Level up**: Add 10 stocks to reach level 2
4. **See confetti**: Watch the celebration when you level up!
5. **Pull to refresh**: Drag down from the top to refresh prices
6. **Remove stocks**: Click the X button on any holding

### Default Stocks to Try:
- AAPL (Apple)
- TSLA (Tesla)
- GME (GameStop)
- MSFT (Microsoft)
- GOOGL (Google)
- AMZN (Amazon)
- NVDA (NVIDIA)
- META (Meta/Facebook)

## ⚡ Quick Troubleshooting

### "npm install" fails
- Make sure Node.js 18+ is installed: `node --version`
- Delete `node_modules` folder and try again
- Try: `npm install --legacy-peer-deps`

### iOS won't build
- Make sure Xcode is installed
- Run: `xcode-select --install`
- Run: `sudo gem install cocoapods`
- In Xcode, select a Team in Signing & Capabilities

### Android won't build
- Make sure Android Studio is installed
- Open Android Studio Settings
- Go to SDK Manager
- Install Android SDK 22 or higher
- Set ANDROID_HOME environment variable

### App shows blank screen
- Run: `npm run sync`
- Clean build in Xcode/Android Studio
- Try uninstalling and reinstalling the app

## 🎨 Customize Your App

### Change App Icon
1. Replace `resources/icon.svg` with your 1024x1024 PNG
2. Run: `npx @capacitor/assets generate`

### Change Splash Screen
1. Replace `resources/splash.svg` with your 2732x2732 PNG
2. Run: `npx @capacitor/assets generate`

### Change Colors
Edit `www/index.html` and modify these CSS variables:
- Background gradient: `#1a1a2e` to `#16213e`
- Accent color: `#4ecdc4`
- Secondary color: `#44a8ff`

### Add Your Finnhub API Key
1. Sign up at https://finnhub.io/
2. Get your free API key
3. Edit `www/index.html` line ~412:
   ```javascript
   const FINNHUB_API_KEY = 'your_key_here';
   ```

## 📚 Next Steps

- Read the full [README.md](README.md) for detailed instructions
- Check [APP_STORE_ASSETS.md](APP_STORE_ASSETS.md) for publishing guide
- Review Capacitor docs: https://capacitorjs.com/docs

## 💡 Pro Tips

1. **Use demo API key for testing** - It's already configured!
2. **Test on real devices** - Haptic feedback only works on real devices
3. **Use Xcode/Android Studio** - Better debugging than command line
4. **Sync after HTML changes** - Always run `npm run sync` after editing `www/index.html`
5. **Check console logs** - Use browser DevTools or Xcode/Android Studio console

## 🐛 Found a Bug?

Open an issue on GitHub with:
- Device/simulator info
- Steps to reproduce
- Expected vs actual behavior
- Console logs (if any)

---

Happy coding! 🦍📈
