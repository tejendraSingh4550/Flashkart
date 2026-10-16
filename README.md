# FlashKart

A responsive Angular storefront for quick-commerce grocery shopping, with an original FlashKart identity and a frontend-only demo order flow.

## Features

- Product catalog with category routes, text search, offer filter, and price sorting
- 28 Indian grocery products across eight categories
- Persistent cart with quantity controls, subtotal, and live navbar count
- Demo coupons: `FLASH10` (10% off) and `SAVE50` (₹50 off on ₹299+)
- Validated checkout form and generated demo order confirmation
- Responsive desktop and mobile layouts with accessible labels and keyboard focus styles

## Technology

Angular 19 standalone components, TypeScript, Angular Router, Signals, Reactive Forms, localStorage, and CSS.

## Run locally

Requires Node.js 20.11+ and npm.

```bash
npm install
npm start
```

Open `http://localhost:4200`. For a production build, run `npm run build`.

Product photography uses Unsplash image URLs and needs an internet connection. A shared grocery photo is used when an image fails to load.

## Screenshot

Run the app and capture the homepage at desktop and mobile widths here.
