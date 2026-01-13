# Purple Hell - Project Documentation

## ⚠️ CRITICAL PROJECT INFO

**PROJECT NAME:** Purple Hell  
**REPOSITORY:** /Users/tsla/purplehell  
**MAIN ENTRY POINT:** `dashboard.html` (NOT "LandingPurple _ DailyEdgeFinance.html")  
**SERVER:** Express.js on port 8080 (server.js)  
**STATUS:** Active development - This is the REAL project being worked on

---

## What This Project Is

Purple Hell is a **financial dashboard application** with:
- 📊 Portfolio tracking and watchlist management
- 💬 ApeChat - AI personas for financial discussion
- 📈 Real-time stock prices via Finnhub API
- 📉 Interactive charts with TradingView widget
- 🌙 Dark/light theme toggle
- 💳 Stripe subscription integration
- 🔐 SQLite database for user subscriptions

---

## File Structure

```
/Users/tsla/purplehell/
├── server.js                    # Express backend (PORT 8080)
├── dashboard.html               # ✅ MAIN APP - serve this!
├── chat.html                    # Chat page
├── markets.html                 # Markets page
├── charts.html                  # Charts page
├── news.html                    # News page
├── LandingPurpleFiles/          # Static assets (CSS, JS, fonts)
├── subscriptions.db             # SQLite database
├── package.json                 # Dependencies
└── PROJECT_README.md            # This file
```

---

## ⚠️ OLD/DEPRECATED FILES (IGNORE THESE)

- `LandingPurple _ DailyEdgeFinance.html` - **OLD/LEGACY FILE**
- This is NOT your current project - do NOT serve this
- This file has a confusing name with spaces - avoid using it

---

## How to Run

### Start the server:
```bash
cd /Users/tsla/purplehell
node server.js
```

### Access the app:
```
http://localhost:8080
```

This will serve `dashboard.html` (the correct project).

---

## Key Technologies

- **Backend:** Node.js + Express
- **Frontend:** Vanilla JavaScript with dynamic components
- **Styling:** Custom CSS with dark/light theme support
- **APIs:** 
  - Finnhub (stock prices)
  - TradingView (charts)
  - Stripe (payments)
- **Database:** SQLite (subscriptions.db)

---

## Recent Git History

The actual project work is in these commits:
- Portfolio tracking v1
- ApeChat with AI personas
- Finnhub API integration
- TradingView charts
- Theme persistence (dark/light)
- Stripe webhook integration

---

## IMPORTANT REMINDERS

1. ✅ **CORRECT:** Serve `dashboard.html` at root (`/`)
2. ❌ **WRONG:** Serving `LandingPurple _ DailyEdgeFinance.html` 
3. ⚠️ **IGNORE:** LandingPurple _ DailyEdgeFinance.html is an old project from Base 44
4. 📁 **ASSETS:** Static files are in `/LandingPurpleFiles/` directory
5. 🔧 **SERVER:** server.js routes point to dashboard.html

---

## Troubleshooting

**If the app shows a blank page:**
- Hard refresh: Cmd+Shift+R (macOS) or Ctrl+Shift+R (Windows)
- Check server is running: `ps aux | grep "node server.js"`
- Check logs: `tail -f /tmp/server.log`

**If assets (CSS/JS) aren't loading:**
- Ensure `/LandingPurpleFiles/` directory exists
- Check folder permissions: `chmod -R 755 /Users/tsla/purplehell/LandingPurpleFiles/`
- Verify paths in HTML use `/LandingPurpleFiles/` prefix

---

**Last Updated:** January 13, 2026  
**Server Status:** Running on port 8080  
**Main App:** dashboard.html
