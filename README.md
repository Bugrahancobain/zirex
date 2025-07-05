# Zirex Web Application

Zirex is a modern, responsive web application built with **Next.js 15**, designed to present and manage company products and services. It includes public pages (such as About Us, Contact, Products, and Services) and an admin panel for internal management.

## 🌐 Live Preview
> (Insert deployment link here if available, e.g. https://zirex.vercel.app)

---

## 🚀 Tech Stack

- **Next.js 15 (App Router)**
- **React 19**
- **Firebase & Firebase Admin SDK**
- **Swiper.js** (Slider/Carousel)
- **React Icons**
- **Vanilla CSS**

---

## 📁 Project Structure

```
public/           → Static files (images, video, favicon, logo)
src/
├── app/          → Main app directory (App Router)
│   ├── aboutus/  → About Us page
│   ├── admin/    → Admin panel (products & services management)
│   ├── contact/  → Contact page
│   ├── forgot-password/
│   ├── login/    → User login page
│   ├── ourProducts/ → Product listing & detail pages
│   ├── ourServices/ → Services listing & detail pages
│   ├── style/    → CSS files
│   └── layout.js → App layout
components/       → Reusable React components (Navbar, Footer, Sidebar, etc.)
firebaseQueries/  → Firebase Admin data fetching helpers
firebase.js       → Firebase client initialization
firebaseAdmin.js  → Firebase Admin SDK setup
```

---

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/bugrahancobain/zirex.git
cd zirex
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root and add:

```env
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
FIREBASE_PROJECT_ID=your_project
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

FIREBASE_SERVICE_ACCOUNT_KEY={"type": "...", ...}  # As a single-line JSON string
```

---

## 🔧 Scripts

- `npm run dev` – Start development server (with Turbopack)
- `npm run build` – Create optimized production build
- `npm start` – Start production server
- `npm run lint` – Run ESLint checks

---

## 📌 Features

- Responsive UI with custom components
- Firebase Realtime Database integration
- Firebase Admin SSR for data fetching
- Slider support using Swiper
- Admin dashboard for product/service CRUD
- Smooth scroll to top button
- Modular CSS files

---

## 🔐 Admin Access

To restrict write access:
- Only users with emails `haydar@zirex.com.tr` and `bugrahancoban1@gmail.com` can write to Firebase.
- Rules are set inside Firebase Realtime Database security rules.

---

## ✍️ Author

- Developed by **Zirex Team**
- For custom integrations or support, contact: [info@zirex.com.tr](mailto:info@zirex.com.tr)

---

## 📝 License

This project is private and not open-sourced.
