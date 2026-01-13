# Stripe Webhook Setup Guide

## Overview
Your production-ready webhook handler is now implemented with:
- ✅ SQLite database for subscription tracking
- ✅ Stripe webhook signature verification
- ✅ Subscription status management
- ✅ User email tracking
- ✅ API endpoint for subscription status queries

## Database Schema
```sql
CREATE TABLE subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id TEXT UNIQUE,
  email TEXT,
  stripe_subscription_id TEXT,
  price_id TEXT,
  status TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## API Endpoints

### 1. Create Checkout Session
**POST** `/api/create-checkout-session`

Request body:
```json
{
  "priceId": "price_1SiydORdPxQfs9UesVrVb3X8",
  "email": "user@example.com",
  "successUrl": "http://localhost:8080/dashboard.html?payment=success",
  "cancelUrl": "http://localhost:8080/LandingPurple%20_%20DailyEdgeFinance.html?payment=cancelled"
}
```

Response:
```json
{
  "id": "cs_live_a14NHYCNu...",
  "url": "https://checkout.stripe.com/..."
}
```

### 2. Webhook Endpoint
**POST** `/webhook`

Listens for Stripe events:
- `checkout.session.completed` - User completes payment
- `customer.subscription.updated` - Subscription status changes
- `customer.subscription.deleted` - Subscription cancelled
- `payment_intent.succeeded` - Payment processed

### 3. Check Subscription Status
**GET** `/api/subscription-status/:customerId`

Response:
```json
{
  "subscribed": true,
  "status": "active",
  "priceId": "price_1SiydORdPxQfs9UesVrVb3X8",
  "email": "user@example.com",
  "createdAt": "2026-01-13T04:10:00.000Z"
}
```

## Setting Up Webhook with Stripe CLI (Testing)

### 1. Install Stripe CLI
```bash
# macOS with Homebrew
brew install stripe/stripe-cli/stripe

# Verify installation
stripe --version
```

### 2. Login to Stripe
```bash
stripe login
```
You'll be prompted to paste your restricted API key from Stripe Dashboard.

### 3. Forward Webhook Events
```bash
stripe listen --forward-to localhost:8080/webhook
```

This will output:
```
Ready! Your webhook signing secret is: whsec_test_...
```

### 4. Update .env File
Copy the webhook signing secret and add it to `.env`:
```
STRIPE_WEBHOOK_SECRET=whsec_test_...
```

### 5. Test Webhook Events
In another terminal:
```bash
# Simulate a successful checkout
stripe trigger payment_intent.succeeded

# Simulate subscription created
stripe trigger customer.subscription.updated

# Simulate subscription cancelled
stripe trigger customer.subscription.deleted
```

## Production Setup

### 1. Create Webhook Endpoint in Stripe Dashboard
1. Go to Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://your-domain.com/webhook`
4. Select events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `payment_intent.succeeded`
5. Click "Add endpoint"
6. Copy the signing secret to your `.env` file

### 2. Update Environment Variables
```
STRIPE_WEBHOOK_SECRET=whsec_live_...
STRIPE_SECRET_KEY=sk_live_...
```

### 3. Restart Server
```bash
npm start
```

## Testing the Full Flow

### Step 1: Open Landing Page
```
http://localhost:8080
```

### Step 2: Click "Subscribe Now"
- Select monthly ($3.99) or yearly ($33.50)
- Click "See Pricing" button
- Enter your email when prompted

### Step 3: Complete Stripe Checkout
- Card: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., `12/25`)
- CVC: Any 3 digits (e.g., `123`)
- Click "Pay"

### Step 4: Verify in Dashboard
- You'll be redirected to dashboard
- See subscription confirmation banner
- Profile shows your email
- Database has updated subscription status

### Step 5: Check Database (Optional)
```bash
sqlite3 subscriptions.db "SELECT * FROM subscriptions;"
```

## Server Logs

Watch for these logs indicating successful webhook handling:
```
✓ Webhook signature verified
📦 Checkout session completed: cs_live_...
  Customer: user@example.com
✓ Subscription saved to database

🔄 Subscription updated: sub_...
✓ Subscription status updated

❌ Subscription cancelled: sub_...
✓ Subscription marked as cancelled
```

## Troubleshooting

### Webhook Not Triggering
- Check `.env` has `STRIPE_WEBHOOK_SECRET` set
- Verify `stripe listen` is running in another terminal
- Check server logs for signature verification errors

### Subscription Not Saving
- Ensure SQLite database file `subscriptions.db` has write permissions
- Check server logs for database errors
- Verify `checkout.session.completed` event was received

### Email Not Captured
- Ensure email is passed in checkout request
- Check that `customer_email` is set in Stripe session
- Verify localStorage has `userEmail` key

### Dashboard Not Showing Email
- Verify payment=success parameter in URL
- Check browser console for errors
- Inspect localStorage for saved profile

## Files Modified

1. **server.js** - Added SQLite integration, webhook handlers, subscription API
2. **LandingPurple _ DailyEdgeFinance.html** - Email prompt in checkout flow
3. **dashboard.html** - Subscription status display, email capture
4. **.env** - Added STRIPE_WEBHOOK_SECRET placeholder
5. **subscriptions.db** - New SQLite database (created on first run)

## Next Steps

1. ✅ Database tracking implemented
2. ✅ Webhook handlers created
3. ✅ Email capture added
4. ⏭️ Set up Stripe CLI for local testing
5. ⏭️ Configure webhook endpoint in Stripe Dashboard
6. ⏭️ Deploy to production server

