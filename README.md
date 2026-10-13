# Krishna Verma — Personal Portfolio Website

A modern, high-performance personal portfolio website for **Krishna Verma**, third-year B.Tech student specializing in Artificial Intelligence and Machine Learning (AIML) at **IPS Academy, Indore, Madhya Pradesh**.

Designed with a dark developer aesthetic, featuring electric blue, purple, and cyan accents, interactive widgets, verified certification credentials, and clean modular code.

---

## 🚀 Key Highlights & Implemented Features

1. **Custom Monogram Avatar**: Styled `KV` monogram vector avatar with neon gradients and tech glow — no external photograph dependency.
2. **Interactive Calorie Tracker Engine**: Built-in interactive widget with immediate real-time goal recalculation, remaining calories count, food log entries, and input validation.
3. **InterviewIQ AI Simulation Preview**: Configurable AI mock interview simulator preview allowing recruiters to test job roles, difficulties, interview formats, question cards, and simulated Gemini evaluation.
4. **Verified Certificate Gallery & Lightbox**:
   - **Deloitte** Data Analytics Job Simulation Certificate (via Forage, June 2026)
   - **AWS Academy Graduate** — Cloud Foundations (Credly badge link, April 2026)
   - **Booqln** Compulsory Internship Program Certificate (MSME, March–May 2026)
   - **Python for Machine Learning** Training (IIT Bombay Spoken Tutorial / EduPyramids / IPS Academy, 98.00% Score, April 2026)
   - **NPTEL** Certification placeholder card ready for exam upload
   - **Smart India Hackathon 2026** problem-statement exploration
5. **Centralized Data Architecture**: All profile information, skills, projects, and credentials are in `src/data/portfolioData.js`.
6. **Fully Responsive & Accessible**: Fluid layouts on smartphones, tablets, laptops, and ultra-wide screens.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 💻 Local Setup & Development Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or newer recommended, tested on Node v24)
- npm (installed automatically with Node.js)

### Step-by-Step Commands

1. **Extract the Project**:
   Extract `Krishna_Verma_Portfolio_Complete.zip` to your desired folder on your computer.

2. **Open in Terminal / VS Code**:
   Open the extracted folder (`krishna-verma-portfolio`) in Visual Studio Code.
   Open a terminal window (`Ctrl + \`` or `Cmd + \``).

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open the displayed URL in your browser (typically `http://localhost:3000` or `http://localhost:5173`).

5. **Build for Production**:
   ```bash
   npm run build
   ```
   This generates an optimized static build in the `dist/` directory ready for deployment anywhere.

6. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📝 How to Update Information

### 1. Updating Profile, Tagline, or Social Links
Open `src/data/portfolioData.js` and modify the `personalInfo` object:
```javascript
export const personalInfo = {
  name: "Krishna Verma",
  tagline: "Your new tagline...",
  email: "krishnavermamh@gmail.com",
  github: "https://github.com/Krishnaverma-87",
  linkedin: "https://www.linkedin.com/in/krishna-verma-bab0213a4/",
  // ...
};
```

### 2. Adding or Updating Projects
In `src/data/portfolioData.js`, update the `projects` array. When you publish a GitHub repository or live deployment URL, simply fill in the properties:
```javascript
{
  id: "interviewiq-ai",
  title: "InterviewIQ AI",
  githubUrl: "https://github.com/Krishnaverma-87/interviewiq-ai", // Add your repo URL
  liveUrl: "https://interviewiq.streamlit.app",                   // Add your live demo URL
  // ...
}
```

### 3. Adding Your Resume PDF
1. Place your finalized resume file inside the `public/` directory named:
   `public/Krishna_Verma_Resume.pdf`
2. In `src/data/portfolioData.js`, switch:
   ```javascript
   resumeAvailable: true
   ```
   The Navbar and Hero buttons will automatically enable instant direct download for recruiters!

### 4. Adding or Replacing Certificate Images
1. Save your certificate image (JPG/PNG) into `public/certificates/`.
2. In `src/data/portfolioData.js`, add or update the certificate entry:
   ```javascript
   {
     id: "nptel-data-science",
     title: "NPTEL Data Science with Python",
     issuer: "NPTEL (IIT Madras)",
     date: "November 2026",
     score: "85%",
     image: "/certificates/my_nptel_cert.jpg",
     verified: true,
     // ...
   }
   ```

---

## 🌐 Free One-Click Deployment Guide

### Option 1: Deploying to Vercel (Recommended)
1. Push this project folder to your GitHub repository (`github.com/Krishnaverma-87/portfolio`).
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your portfolio is live with a free SSL certificate!

### Option 2: Deploying to Netlify
1. Go to [netlify.com](https://www.netlify.com/) and sign in.
2. Drag and drop the `dist/` folder directly into Netlify's web dashboard, OR connect via GitHub.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

---

## 📋 Checklist for Remaining Items to Add Later

- [ ] Add GitHub repository URLs in `src/data/portfolioData.js` as repositories become public.
- [ ] Add Live demo URLs for deployed applications (e.g., Streamlit Cloud, Render).
- [ ] Add `Krishna_Verma_Resume.pdf` to the `public/` folder once finalized.
- [ ] Add the specific course title and certificate image for the NPTEL credential once results are released.
- [ ] Add Class 10 & 12 marksheets / board names if desired in `educationData`.

---

© 2026 Krishna Verma • IPS Academy, Indore
