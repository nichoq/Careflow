<p align="center">
  <img src="Appointment/images/Logo.png" alt="CareFlow Logo" height="60" />
</p>

<h1 align="center">CareFlow</h1>

<p align="center">
  <strong>A modern doctor's appointment booking platform</strong><br/>
  Search verified doctors · Book online or in-person · Consult from anywhere
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

---

## ✨ Overview

**CareFlow** is a full-featured doctor's appointment booking website built with vanilla HTML, CSS, and JavaScript. It provides patients with a seamless way to find doctors, view their profiles, and book consultations — either online or face-to-face.

Designed with a **premium healthcare aesthetic** featuring glassmorphism, gradient accents, smooth micro-animations, and fully responsive layouts.

---

## 🖥️ Pages

| Page | Description |
|---|---|
| **Homepage** | Landing page with hero search, services showcase, trust stats, and "How It Works" guide |
| **Search** | Browse 20+ doctors with filters by specialty, location, and availability |
| **Doctor Profiles** | Detailed profiles with education, certifications, schedules, and FAQ |
| **Book Appointment** | Multi-step booking form with patient type selection, appointment details, and confirmation |
| **Consult Now** | Browse online doctors available for immediate virtual consultations |
| **Contact** | Support contact form with email, phone, and address information |
| **Sign Up / Login** | Authentication with login/signup toggle (localStorage-based) |
| **User Profile** | User dashboard with personal info and appointment history |

---

## 🎨 Design System

CareFlow uses a centralized design system defined in `global.css`:

- **Typography:** [Outfit](https://fonts.google.com/specimen/Outfit) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body)
- **Color Palette:**
  - Primary: `#0A6EBD` (vibrant blue)
  - Dark: `#0B2447` (deep navy)
  - Accent: `#00D2FF` (electric cyan)
  - Success: `#12D18E` (emerald green)
- **Components:** Glassmorphism cards, gradient buttons, animated stat counters, floating decorative shapes
- **Animations:** `fadeInUp`, `slideInRight`, `scaleIn`, `float`, `pulse` with stagger delays

---

## 📂 Project Structure

```
Careflow/
└── Appointment/
    ├── global.css              # Shared design system & tokens
    ├── homepage.html/css       # Landing page (pre-login)
    ├── Mainpage.html/css       # Dashboard (post-login)
    ├── search.html/css/js      # Doctor search & filtering
    ├── appointment.html/css/js # Multi-step booking flow
    ├── available.html/css      # Online doctors & FAQ
    ├── contact.html/css        # Contact form
    ├── signup.html/css/js      # Auth (login/signup)
    ├── userprofile.html        # User profile & history
    ├── DoctorProfiles/
    │   ├── profile.css         # Shared doctor profile styles
    │   └── profile[1-20].html  # 20 individual doctor profiles
    └── images/                 # All image assets
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- No build tools, frameworks, or package managers required

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/nichoq/Careflow.git
   cd Careflow
   ```

2. **Open in browser**
   ```
   Open Appointment/homepage.html in your browser
   ```

   Or use **Live Server** (VS Code extension) for hot-reload:
   - Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
   - Right-click `homepage.html` → **Open with Live Server**

---

## 🔧 Features

### For Patients
- 🔍 **Search & Filter** — Find doctors by specialty, location, and availability
- 📅 **Book Appointments** — Multi-step booking with virtual or in-person options
- 💬 **Online Consultation** — Consult with available doctors instantly
- 👤 **User Profiles** — View personal info and appointment history
- 🔐 **Authentication** — Sign up / login with localStorage persistence

### For the Experience
- 🎨 **Premium Design** — Glassmorphism, gradients, and micro-animations
- 📱 **Responsive** — Works on desktop, tablet, and mobile
- ⚡ **Zero Dependencies** — Pure HTML/CSS/JS, no frameworks needed
- 🧩 **Modular CSS** — Centralized design tokens in `global.css`

---

## 🩺 Doctor Data

The app includes **20 doctor profiles** with the following specialties:

| Specialty | Count |
|---|---|
| General Physician | 4 |
| Gynecologist | 4 |
| Dermatologist | 3 |
| Pediatricians | 3 |
| Neurologist | 3 |
| Gastroenterologist | 3 |

Doctors are spread across locations including Manila, Davao City, Cebu City, Quezon City, Taguig City, Antipolo City, and various Cavite cities.

---

## 📸 Screenshots

> Open `Appointment/homepage.html` in a browser to see the full redesigned experience.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Custom properties, Grid, Flexbox, animations, glassmorphism |
| **JavaScript** | DOM manipulation, search/filter logic, localStorage auth |
| **Google Fonts** | Outfit + Inter typography |

---

## 👤 Author

**Nicholas Quizo**

- GitHub: [@nichoq](https://github.com/nichoq)

---

## 📄 License

This project is for educational purposes. © 2025 CareFlow. All Rights Reserved.
