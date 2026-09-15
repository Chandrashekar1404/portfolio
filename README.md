# 👋 Chandra Shekar — Full-Stack Developer Portfolio

<p align="center">
  <strong>Python • Django • Django REST Framework • Java • Spring Boot • React • MySQL • REST APIs • JWT</strong>
</p>

<p align="center">
  A modern React portfolio showcasing real-world full-stack applications and backend/API development work.
</p>

---

## 🚀 About This Portfolio

This repository contains my personal developer portfolio and the backend service used by its contact form.

The portfolio is intentionally aligned with the technologies and projects represented on my GitHub profile rather than generic placeholder content.

### My primary focus

- 🐍 Python, Django & Django REST Framework
- ☕ Java & Spring Boot
- ⚛️ React & JavaScript
- 🔌 REST API development
- 🗄️ MySQL & database-driven applications
- 🔐 JWT authentication and authorization
- 🛠️ Git, GitHub and Postman

---

## 💼 Featured Projects

| Project | Stack | Repository |
|---|---|---|
| 🤖 AI Resume Builder | React • Django • REST API • AI | [View](https://github.com/Chandrashekar1404/AI-Resume-Builder-fullstack) |
| 💼 Job Portal | React • Django • DRF • MySQL | [View](https://github.com/Chandrashekar1404/job-portal-fullstack) |
| 🍽️ NexaDine | React • Spring Boot • MySQL • Razorpay | [View](https://github.com/Chandrashekar1404/restaurant-fullstack) |
| 🛒 MegaVault | React • Spring Boot • MySQL • Razorpay | [View](https://github.com/Chandrashekar1404/ecom-fullstack) |
| 🏦 Banking Application | Full Stack • Backend • Database | [View](https://github.com/Chandrashekar1404/bank-fullstack) |
| 🌤️ Live Weather | JavaScript • REST API | [View](https://github.com/Chandrashekar1404/ChandraShekar_livewheather) |

---

## 🧰 Portfolio Tech Stack

### Frontend

- React 19
- Vite
- JavaScript / JSX
- Tailwind CSS 4
- Responsive UI
- Intersection Observer based animations

### Backend

- Node.js
- Express
- MongoDB / Mongoose
- Express Validator
- Helmet
- Rate limiting
- CORS

### Development

- Git & GitHub
- VS Code
- Postman
- npm

---

## 📂 Project Structure

```text
portfolio/
│
├── portfolio-react/             # React portfolio frontend
│   ├── public/
│   │   └── developer_profile.webp
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
├── portfolio-backend/            # Contact form API
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## ⚙️ Run Locally

### 1. Clone

```bash
git clone https://github.com/Chandrashekar1404/portfolio.git
cd portfolio
```

### 2. Start the frontend

```bash
cd portfolio-react
npm install
npm run dev
```

Open the Vite development URL shown in the terminal.

### 3. Start the contact backend

Open another terminal:

```bash
cd portfolio-backend
npm install
```

Create `.env` from `.env.example` and configure your MongoDB connection and application settings.

Then run:

```bash
npm run dev
```

The frontend contact form uses `VITE_API_URL` when supplied; otherwise it falls back to the local contact endpoint used by the development setup.

### 4. Production build

```bash
cd portfolio-react
npm run build
npm run preview
```

---

## 🔐 Security Notes

- Keep `.env` files out of GitHub.
- Never commit database credentials or private API keys.
- Use a strong production MongoDB credential.
- Configure CORS for the actual deployed frontend origin.
- Keep rate limiting and request validation enabled for the contact endpoint.
- Use HTTPS in production.

---

## 📌 Portfolio Sections

- **Hero** — current developer positioning and core stack
- **About** — development focus and technical strengths
- **Capabilities** — Django/DRF, Spring Boot, React and full-stack development
- **Projects** — GitHub-backed real-world projects
- **Developer Snapshot** — project breadth and learning mindset
- **Project Themes** — visual overview of featured work
- **Contact** — direct email, LinkedIn, GitHub and contact form

---

## 🎯 Current Learning Focus

I am continuously improving in:

- Advanced Django & Django REST Framework
- Java & Spring Boot
- REST API architecture
- React full-stack development
- Database design and optimization
- Authentication and authorization
- Clean code and software architecture
- Testing and production-ready development

---

## 🤝 Connect With Me

- 💼 [LinkedIn](www.linkedin.com/in/chandra-shekar-malthumkar-745534232)
- 🐙 [GitHub](https://github.com/Chandrashekar1404)
- 📧 chandrashekar7414@gmail.com

---

## ⭐ Thanks for Visiting

If you find one of my projects useful, feel free to explore the repositories and leave a ⭐.

**Let's build something useful together. 🚀**
