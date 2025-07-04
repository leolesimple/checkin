# ✅ Checkin — Visitor Management Web App

Welcome to **Checkin**, a modern web application built with [Next.js](https://nextjs.org) and TypeScript for event registration and attendee management.

This project was designed as a fictional visitor management system, using an Apple Event as the creative setting to explore a premium, clean and branded experience. The app allows visitors to register for an event, while providing organizers with a secure admin dashboard to manage attendees.

---

## 🚀 About the Project

**Checkin** simulates a real-world event management system with:

- **Visitor Registration**: A user-friendly sign-up flow for attendees.
- **Admin Dashboard**: Event staff can view, manage, and control participant access.
- **Legal Compliance**: Includes dedicated pages for Privacy Policy, Terms of Service, and Cookie Policy.
- **Modern UI**: Reusable and accessible components styled with inspiration from Apple’s clean aesthetic.
- **Responsive Design**: Optimized for desktops, tablets and mobile devices.
- **Branded Assets**: Uses high-quality, Apple-inspired visuals and optimized fonts.

---

## ✨ Features

- Built with Next.js 14+ App Router architecture
- Written in TypeScript for reliability
- Modular and reusable UI components
- Full registration flow for participants
- Secure dashboard for event management
- Legal documentation pages
- Fully responsive design
- Apple-inspired interface and branding (for demo purposes only)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/leolesimple/checkin.git
cd checkin
npm install
````

### Environment Variables

Create a `.env.local` file at the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

### Development

```bash
npm run dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
app/
  (dashboard)/         # Admin interface
  (legal)/             # Privacy, terms and cookie policy
  register/            # Public registration page
  studio/              # Internal tools
  ui/                  # Shared components
public/img/            # Branded static visuals
```

---

## 🧑‍💻 Tech Stack

* [Next.js](https://nextjs.org)
* [React](https://react.dev)
* [TypeScript](https://www.typescriptlang.org)
* [Supabase](https://supabase.com)

---

## 📄 License

This project is licensed under the **GNU AGPL v3**.

> ℹ️ This demo is a fictional application, not affiliated with Apple Inc.
> Assets and branding elements inspired by Apple are used purely for educational and illustrative purposes.

---

## 🙌 Contributions

Suggestions and contributions are welcome! Feel free to open an issue or submit a pull request.