# Potzyn 🌿

A full-featured **E-Commerce Plant Shop** built with **Next.js**, **TypeScript**, **PostgreSQL**, and **Prisma**.

---

## Features

- **Secure Authentication**: Next Auth with JWT and cookies for session management.
- **Admin Dashboard**: Manage products, orders, and users with **Recharts** for analytics.
- **User Profiles**: Order history and review systems for enhanced user retention.
- **Payment Integration**: Real-time payments via **Stripe** and **PayPal**, including cash on delivery.
- **Dynamic Search & Filtering**: Advanced search, filters, and sorting for products.
- **Multiple Product Images**: Upload and manage images using **Uploadthing**.
- **Ratings & Reviews**: User-generated reviews and ratings for products.
- **SEO Optimization**: Server-side rendering (SSR), meta tags, and structured data.
- **Dark/Light Mode**: Toggle between themes for a personalized experience.
- **Interactive Checkout**: Smooth and secure checkout process.
- **Performance Optimization**: Code-splitting, lazy loading, and optimized database queries.

---

## Usage

### Install Dependencies

```bash
npm install
```

If you encounter dependency compatibility issues (e.g., React 19), run:

```bash
npm install --legacy-peer-deps
```

### Environment Variables

Rename `.example-env` to `.env` and add the following:

#### PostgreSQL Database URL

Sign up for a free PostgreSQL database through **Vercel** or any other provider.

**Example:**

```
DATABASE_URL="postgresql://username:password@host:port/dbname"
```

#### Next Auth Secret

Generate a secret using:

```bash
openssl rand -base64 32
```

**Example:**

```
NEXTAUTH_SECRET="xmVpackzg9sdkEPzJsdGse3dskUY+4ni2quxvoK6Go="
```

#### PayPal Client ID and Secret

Create a PayPal developer account and get your credentials.

**Example:**

```
PAYPAL_CLIENT_ID="AeFIdonfA_dW_ncys8G4LiECWBI9442IT_kRV15crlmMApC6zpb5Nsd7zlxj7UWJ5FRZtx"
PAYPAL_APP_SECRET="REdG53DEeX_ShoPawzM4vQHCYy0a554G3xXmzSxFCDcSofBBTq9VRqjs6xsNVBcbjqz--HiiGoiV"
```

#### Stripe Publishable and Secret Key

Create a Stripe account and get your API keys.


#### Uploadthing Settings

Sign up at [Uploadthing](https://uploadthing.com/) and get your credentials.


#### Resend API Key

Sign up at [Resend](https://resend.io/) and get your API key.


### Run the Application

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

Open (http://localhost:3000) in your browser to view the app.

---

## Prisma Studio

To open **Prisma Studio** and manage your database, run:

```bash
npx prisma studio
```

---

## Seed Database

To seed the database with sample data, run:

```bash
npx tsx ./db/seed
```

---

## Demo

Check out the live demo here: https://potzyn-nextjs.vercel.app/


## License

**MIT License**

Copyright (c) [2025] [Thi Nguyen]

This project is open source and free to use. However, please do not copy the design or code directly and claim it as your own. If you use this project as inspiration or a reference, kindly give credit by linking back to this repository.

---

Enjoy exploring **Potzyn**! 🌿 If you have any questions or feedback, feel free to open an issue or reach out.

Happy Coding! 🚀
