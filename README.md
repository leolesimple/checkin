# 🍏 Apple Event Visitor Management App

Welcome to the **Apple Event Visitor Management App**! This is a modern web application built with [Next.js](https://nextjs.org) and TypeScript, designed specifically for a fictional Apple Event. The platform allows visitors to register for the event and provides a backend dashboard for event organizers to manage and control attendee access.

---

## 🚀 About the Project

This project simulates a real-world event management system for a fake Apple Event. It features:

- **Visitor Registration:** Attendees can sign up for the event through a user-friendly registration form.
- **Admin Dashboard:** Organizers can view, manage, and control registered visitors from a secure dashboard.
- **Legal Compliance:** Includes dedicated pages for Privacy Policy, Terms of Service, and Cookie Policy.
- **Modern UI:** Built with reusable and accessible UI components, styled for a premium Apple-like experience.
- **Responsive Design:** Fully optimized for all devices.
- **Optimized Assets:** Uses high-quality Apple-themed images and optimized font loading with `next/font`.

---

## ✨ Features

- Next.js 14+ App Router architecture
- TypeScript for type safety
- Modular UI components (buttons, forms, navigation, etc.)
- Event registration flow
- Legal pages (Privacy, Terms, Cookies)
- Studio dashboard for event staff
- Responsive, mobile-first design
- Apple-inspired branding and assets

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/leolesimple/next-event.git
cd event
npm install # or yarn, pnpm, bun
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
app/
  (dashboard)/         # Admin dashboard pages
  (legal)/             # Legal pages (cookies, privacy, terms)
  register/            # Visitor registration page
  studio/              # Studio dashboard for event staff
  ui/                  # Reusable UI components
public/img/            # Apple-themed static images
```

- **app/layout.tsx**: Root layout
- **app/page.tsx**: Main landing page
- **app/ui/**: Buttons, forms, navbar, etc.

---

## 🧑‍💻 Technologies Used

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

---

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

If you require additional permissions or wish to use this project beyond the terms of the AGPL, please contact the repository owner.

---

## 🙏 Acknowledgements

- This project is a fictional demo and is not affiliated with Apple Inc.
- Apple logos and images are used for educational and demonstration purposes only.
