# StudioSpace - Peer-to-Peer Creative Workspace

StudioSpace is a full-stack platform designed for discovering and booking creative studios, photography spaces, film stages, and podcast suites.

- **GitHub Repository**: [https://github.com/Ifaj-codes/studiospace](https://github.com/Ifaj-codes/studiospace)
- **Live Vercel Client**: [Pending Vercel Deployment Link]

---

## 🚀 Features

- **Explore Creative Studios**: Browse photography studios, film stages, podcast lounges, and recording rooms.
- **Featured Spaces**: Highlighting top-rated creative spaces directly on the homepage.
- **Host Dashboard / Add Studio**: Registered users can publish their studio spaces with titles, categories, pricing, locations, and descriptions.
- **Real-Time Database**: Backed by MongoDB for fast and scalable data management.
- **Responsive UI**: Built with Next.js 16 (App Router) and Tailwind CSS for mobile, tablet, and desktop responsiveness.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide React / React Hot Toast
- **Backend**: Node.js, Express 5, CORS, Dotenv
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Frontend Client)

---

## 📂 Project Structure

```text
yooo/
├── studiospace-client/     # Next.js frontend application
│   ├── app/                # App router pages & components
│   ├── public/             # Static assets
│   └── package.json
└── studiospace-server/     # Express.js REST API server
    ├── index.js            # Server entrypoint & MongoDB routes
    └── package.json
```

---

## ⚙️ Setup & Local Development

### 1. Backend Server Setup
```bash
cd studiospace-server
npm install
# Configure your .env file with DB_USER and DB_PASS
npm start
```

### 2. Frontend Client Setup
```bash
cd studiospace-client
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
