# App Store Assets Guide

This guide provides detailed information about required assets for submitting Ape Hub to the Apple App Store and Google Play Store.

## iOS App Store Assets

### App Icon

**Required**: Yes

**Specifications**:
- Size: 1024 x 1024 pixels
- Format: PNG (no transparency)
- Color space: sRGB or Display P3
- Location: `resources/icon.png`

**Notes**:
- Must not have rounded corners (iOS adds them automatically)
- Must fill entire square
- Must not include Apple hardware or logos
- Xcode automatically generates all required sizes from this single icon

### App Screenshots

**Required**: Yes (at least one set)

**iPhone 6.7" Display** (iPhone 15 Pro Max, 14 Pro Max, 13 Pro Max, 12 Pro Max)
- Portrait: 1290 x 2796 pixels
- Landscape: 2796 x 1290 pixels
- Format: PNG or JPEG
- Required: At least 1, maximum 10

**iPhone 6.5" Display** (iPhone 11 Pro Max, XS Max)
- Portrait: 1242 x 2688 pixels
- Landscape: 2688 x 1242 pixels
- Required if targeting older devices

**iPhone 5.5" Display** (iPhone 8 Plus, 7 Plus, 6s Plus)
- Portrait: 1242 x 2208 pixels
- Landscape: 2208 x 1242 pixels
- Optional but recommended for compatibility

**iPad Pro (3rd gen) 12.9" Display**
- Portrait: 2048 x 2732 pixels
- Landscape: 2732 x 2048 pixels
- Required if app supports iPad

**Recommendations**:
- Show the app in action
- Highlight key features: XP system, stock tracking, confetti animations
- Use device frames for better presentation
- Keep text minimal and readable
- Show 4-6 screenshots per device size

### App Preview Video (Optional)

**Specifications**:
- Duration: 15-30 seconds
- Resolution: Same as screenshot requirements
- Format: .mov, .mp4, or .m4v
- Codec: H.264 or HEVC

**Content Ideas**:
- User adding a stock and gaining XP
- Level up animation with confetti
- Pull-to-refresh functionality
- Price updates in real-time

### Splash Screen

**Specifications**:
- Size: 2732 x 2732 pixels (for all devices)
- Location: `resources/splash.png`
- Format: PNG
- Background: Black (#000000)

**Current Design**:
- Centered "Ape Hub" text
- 🦍 emoji or icon
- Tagline: "Track stocks, gain XP, level up!"

## Google Play Store Assets

### High-Res Icon

**Required**: Yes

**Specifications**:
- Size: 512 x 512 pixels
- Format: 32-bit PNG with alpha channel
- Max file size: 1024 KB
- Location: `resources/icon.png`

**Notes**:
- Use full square space
- No rounded corners
- Can have transparency
- Google Play adds mask for different devices

### Feature Graphic

**Required**: Yes (for featured placement)

**Specifications**:
- Size: 1024 x 500 pixels
- Format: PNG or JPEG
- Max file size: 1024 KB

**Design Recommendations**:
- Include app name "Ape Hub"
- Show key visuals: 🦍 + 📈
- Use gradient background (similar to app theme)
- Avoid small text (won't be readable)

**Example Content**:
```
Left side: Ape Hub logo/icon
Right side: "Track Stocks • Gain XP • Level Up!"
Background: Gradient from #ff6b6b to #4ecdc4
```

### Screenshots

**Phone Screenshots**

**Required**: Yes (minimum 2, maximum 8)

**Specifications**:
- Minimum length: 320 pixels
- Maximum length: 3840 pixels
- Format: PNG or JPEG
- Max file size: 8 MB each

**Recommended Sizes**:
- 1080 x 1920 pixels (portrait)
- 1080 x 2340 pixels (portrait, taller phones)
- 1920 x 1080 pixels (landscape)

**Content to Show**:
1. Main screen with holdings list
2. XP bar and level system
3. Adding a new stock
4. Price updates and changes
5. Confetti/level up animation
6. Search functionality
7. Pull-to-refresh indicator
8. Stats and achievements

**Tablet Screenshots** (Optional but recommended)

**7-inch Tablet**:
- 1200 x 1920 pixels (portrait)
- 1920 x 1200 pixels (landscape)

**10-inch Tablet**:
- 1600 x 2560 pixels (portrait)
- 2560 x 1600 pixels (landscape)

### Promo Video (Optional)

**Specifications**:
- Duration: 30 seconds to 2 minutes
- Max file size: 100 MB
- Aspect ratio: 16:9 or 9:16
- Resolution: 1920 x 1080 or higher
- Format: MP4 or MPEG

## Creating Screenshots

### Tools

**iOS**:
- Xcode Simulator: Cmd+S to take screenshot
- Physical device: Power + Volume Up
- [Fastlane Frameit](https://docs.fastlane.tools/actions/frameit/): Add device frames
- [Screenshot Creator](https://screenshot.app/): Professional framing

**Android**:
- Android Emulator: Camera icon in toolbar
- Physical device: Power + Volume Down
- [Screener](https://play.google.com/store/apps/details?id=de.toastcode.screener): Add device frames
- [Device Art Generator](https://developer.android.com/distribute/marketing-tools/device-art-generator): Official tool

### Screenshot Checklist

For each screenshot, ensure:
- [ ] Stock holdings are visible
- [ ] XP bar shows progress
- [ ] Level is displayed
- [ ] Stock prices are realistic (use actual tickers)
- [ ] UI is crisp and clear
- [ ] No personal information visible
- [ ] No copyrighted content
- [ ] App looks good on light and dark backgrounds

### Recommended Screenshots Order

1. **Hero Shot**: Main screen with holdings and XP system
2. **Adding Stock**: Search bar with popular stock being added
3. **Level Up**: Confetti animation with level up notification
4. **Price Tracking**: Holdings with price changes (green/red)
5. **Stats**: Overview of total holdings and XP
6. **Pull to Refresh**: Visual of refresh functionality (optional)

## App Store Listing Text

### App Name
- iOS: "Ape Hub - Stock Tracker" (max 30 characters)
- Android: "Ape Hub: Stock Tracker & Gamification" (max 50 characters)

### Subtitle (iOS only)
"Track stocks with gamification" (max 30 characters)

### Short Description (Android only)
"Track your favorite stocks with XP, levels, and gamification!" (max 80 characters)

### Keywords (iOS only)
```
stock tracker, stocks, investing, portfolio, finance, trading, market, gamification, XP, level up
```
(max 100 characters including commas)

### Category
- Primary: Finance
- Secondary: Productivity (iOS) / Tools (Android)

### Content Rating
- iOS: 4+ (No objectionable content)
- Android: Everyone or Teen (depending on gambling classification)

### Privacy Policy URL
Required for both stores. Should include:
- What data is collected (stock symbols, XP, level)
- How data is stored (locally on device)
- Third-party services (Finnhub API)
- No personal information collection

### Support URL
Link to GitHub issues or support email

## Asset Preparation Workflow

### Step 1: Design Assets
1. Create high-resolution app icon (1024x1024)
2. Create splash screen (2732x2732)
3. Create feature graphic for Android (1024x500)

### Step 2: Generate Icons
```bash
# Replace resources/icon.svg with your design
# Replace resources/splash.svg with your design

# Install asset generator
npm install -g @capacitor/assets

# Generate all sizes
npx @capacitor/assets generate --iconBackgroundColor '#1a1a2e' --splashBackgroundColor '#000000'
```

### Step 3: Take Screenshots
1. Run app on various simulators/emulators
2. Capture key screens (see checklist above)
3. Add device frames using tools mentioned
4. Optimize images (reduce file size without quality loss)

### Step 4: Review Assets
- [ ] All images are correct dimensions
- [ ] No pixelation or artifacts
- [ ] Consistent branding across all assets
- [ ] Text is readable at all sizes
- [ ] Colors match app theme
- [ ] No sensitive information visible

### Step 5: Upload to Stores
- iOS: App Store Connect
- Android: Google Play Console

## App Store Optimization (ASO) Tips

### Keywords Strategy
- Use actual search terms: "stock tracker", "portfolio"
- Include competitor names where appropriate
- Use long-tail keywords: "gamified stock tracking"
- Monitor and adjust based on ranking

### Description Optimization
- First 3 lines are crucial (visible without expanding)
- Use bullet points for features
- Include relevant keywords naturally
- Add social proof when available
- Call to action at the end

### Visual Appeal
- Use bright, contrasting colors
- Show actual app interface, not mockups
- Highlight unique features (XP system)
- Keep screenshots up to date with app version

## Testing Before Submission

### Checklist
- [ ] App icon looks good on home screen
- [ ] Splash screen displays correctly
- [ ] All screenshots are correctly sized
- [ ] Feature graphic is clear and appealing
- [ ] Description has no typos
- [ ] All links (support, privacy) work
- [ ] App name doesn't conflict with existing apps
- [ ] Content rating is appropriate
- [ ] All required fields are filled

### Device Testing
Test on these devices at minimum:
- iPhone SE (small screen)
- iPhone 15 Pro (standard size)
- iPhone 15 Pro Max (large screen)
- iPad Pro (if supporting tablets)
- Pixel 7 (Android standard)
- Galaxy S23 (Android large screen)
- Older device (e.g., Android 8, iOS 14)

## Submission Timeline

**iOS App Store**:
- Review time: 1-3 days (typically)
- Expedited review: Available for critical issues
- Resubmission after rejection: Same day to 48 hours

**Google Play Store**:
- Review time: Few hours to 7 days
- Typically faster than iOS (often same day)
- Can track review status in console

## Post-Launch

### Monitor
- Review ratings and respond promptly
- Track download numbers
- Monitor crash reports
- Analyze user feedback

### Update Assets
- Update screenshots when adding features
- Refresh seasonal graphics
- A/B test different icons (Android)
- Optimize based on conversion rates

### Localization (Future)
Consider localizing assets for:
- Spanish (es)
- Chinese (zh-Hans, zh-Hant)
- Japanese (ja)
- French (fr)
- German (de)

## Resources

### iOS
- [App Store Screenshot Specifications](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications)
- [App Icon Design Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

### Android
- [Graphic Assets Guidelines](https://support.google.com/googleplay/android-developer/answer/9866151)
- [Feature Graphic Requirements](https://support.google.com/googleplay/android-developer/answer/1078870)
- [Launch Checklist](https://developer.android.com/distribute/best-practices/launch/launch-checklist)

### Tools
- [Figma](https://figma.com) - Design tool
- [Sketch](https://sketch.com) - Design tool (macOS)
- [Fastlane](https://fastlane.tools/) - Automate screenshots and deployment
- [App Store Screenshot Generator](https://www.appstorescreenshot.com/)

---

**Need Help?** Open an issue on GitHub or contact the development team.
