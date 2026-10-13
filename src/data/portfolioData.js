/**
 * Krishna Verma Portfolio Data
 * Centralized data file for easy updates to profile, skills, projects, certificates, and education.
 */

export const personalInfo = {
  name: "Krishna Verma",
  initials: "KV",
  tagline: "Aspiring AI and Software Developer passionate about building creative, practical, and intelligent solutions.",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Artificial Intelligence and Machine Learning (AIML)",
  currentYear: "Third Year",
  currentSemester: "Fifth Semester",
  college: "IPS Academy",
  collegeLocation: "Indore, Madhya Pradesh, India",
  graduationYear: 2028,
  email: "krishnavermamh@gmail.com",
  github: "https://github.com/Krishnaverma-87",
  linkedin: "https://www.linkedin.com/in/krishna-verma-bab0213a4/",
  avatar: "/avatar/kv_avatar.svg",
  resumeAvailable: false, // Set to true when resume file is added to public/Krishna_Verma_Resume.pdf
  resumePath: "/Krishna_Verma_Resume.pdf"
};

export const aboutMe = {
  introduction: "I am a third-year B.Tech student specializing in Artificial Intelligence and Machine Learning at IPS Academy, Indore. I enjoy exploring new technologies, solving problems, and developing practical applications that combine creativity with technology. I have experience with Python, C++, SQL, web development fundamentals, and AI-powered applications. I am continuously improving my skills through hands-on projects and learning new technologies. My goal is to become a skilled software and AI developer and contribute to innovative projects that solve real-world problems.",
  highlights: [
    {
      title: "AI & Machine Learning",
      description: "Hands-on implementation of generative models, prompt engineering with Gemini API, and core ML algorithms.",
      icon: "Brain"
    },
    {
      title: "Software Engineering",
      description: "Writing clean, modular code with Python, C++, FastAPI, and modern frontend frameworks.",
      icon: "Code2"
    },
    {
      title: "Problem Solving",
      description: "Dedicated focus on data structures, algorithmic efficiency, and building reliable practical tools.",
      icon: "Cpu"
    },
    {
      title: "Continuous Learning",
      description: "Actively earning verified credentials from AWS Academy, IIT Bombay Spoken Tutorial, Deloitte, and NPTEL.",
      icon: "Sparkles"
    }
  ],
  quickStats: [
    { label: "Hands-on Projects", value: "5" },
    { label: "Academic Standing", value: "3rd Year (Sem 5)" },
    { label: "Verified Credentials", value: "5" },
    { label: "Expected Graduation", value: "2028" }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    description: "Core languages used for problem solving, backend logic, and scripting",
    skills: [
      { name: "Python", level: "Primary", icon: "devicon-python-plain" },
      { name: "C++", level: "DSA & Systems", icon: "devicon-cplusplus-plain" },
      { name: "SQL", level: "Relational Queries", icon: "devicon-mysql-plain" },
      { name: "JavaScript", level: "Web & Scripting", icon: "devicon-javascript-plain" }
    ]
  },
  {
    category: "AI, Machine Learning & Backend",
    icon: "BrainCircuit",
    description: "Frameworks and APIs used to build intelligent services and APIs",
    skills: [
      { name: "Machine Learning Fundamentals", level: "Supervised & Unsupervised" },
      { name: "Streamlit", level: "Rapid AI Prototyping" },
      { name: "FastAPI", level: "High-performance REST APIs" },
      { name: "Google Gemini API", level: "LLM & Multimodal AI" }
    ]
  },
  {
    category: "Web Development",
    icon: "Layout",
    description: "Modern frontend technologies for clean and responsive user interfaces",
    skills: [
      { name: "HTML5", level: "Semantic Markup" },
      { name: "CSS3", level: "Modern Layouts & Animations" },
      { name: "Tailwind CSS", level: "Utility-first Styling" }
    ]
  },
  {
    category: "Databases & Development Tools",
    icon: "Database",
    description: "Storage solutions and version control workflows",
    skills: [
      { name: "MongoDB", level: "NoSQL Document Store" },
      { name: "MySQL", level: "Relational Database" },
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Collaboration & Repos" },
      { name: "VS Code", level: "Primary IDE" }
    ]
  },
  {
    category: "Soft Skills",
    icon: "Users",
    description: "Professional mindset, collaboration, and learning attributes",
    skills: [
      { name: "Problem-solving", level: "Analytical approach" },
      { name: "Teamwork", level: "Collaborative building" },
      { name: "Adaptability", level: "Fast technology adoption" },
      { name: "Creative thinking", level: "Innovative solutions" },
      { name: "Continuous learning", level: "Growth mindset" }
    ]
  }
];

export const projects = [
  {
    id: "interviewiq-ai",
    title: "InterviewIQ AI",
    subtitle: "AI-Powered Mock Interview Simulator",
    category: "ai",
    featured: true,
    description: "InterviewIQ AI is an AI-powered mock interview application designed to help students prepare for technical and HR interviews. Users can choose their preferred job role, difficulty level, interview type, and duration to practice interview questions and improve their confidence.",
    image: "/projects/interviewiq.svg",
    technologies: ["Python", "Streamlit", "Google Gemini API"],
    features: [
      "Target Job Roles: AI/ML Engineer, Python Developer, Data Analyst, Web Developer, Java Developer",
      "Dynamic Difficulty Levels: Beginner, Intermediate, and Advanced tiers",
      "Flexible Interview Formats: Technical, HR, and Mixed interview modes",
      "Custom Durations: 15, 30, 45, and 60 minutes sessions",
      "Real-time Gemini API integration for generative question streaming and answer evaluation"
    ],
    technicalDetails: "Developed with Python and Streamlit, leveraging Google Gemini models to construct contextual follow-up questions tailored to the candidate's chosen role and experience level.",
    githubUrl: null, // Set to repo link when published
    liveUrl: null,   // Set to live demo link when published
    hasSimulator: true
  },
  {
    id: "dementia-support-platform",
    title: "Dementia Patient Support Platform",
    subtitle: "MindSaathi — Accessible Caregiver & Routine Companion",
    category: "ai",
    featured: true,
    description: "A digital support platform designed to assist people living with dementia and their caregivers. The platform aims to make everyday care easier by providing an accessible interface for organizing care-related information, supporting daily routines, and helping caregivers coordinate essential activities.",
    image: "/projects/mindsaathi_dementia.svg",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "FastAPI / Node.js"],
    features: [
      "Daily Routine Management: Simple, clear interface for viewing schedules and day-to-day routines",
      "High-Contrast Accessible UI: Large typography, simplified interactions, and accessible layout",
      "Caregiver Coordination: Centralized care notes and essential contact access",
      "Appointment Organization: Keeping track of important healthcare and therapy appointments"
    ],
    plannedFeatures: [
      "Multi-caregiver shared notes and activity logs",
      "Audio-assisted routine prompts",
      "Offline emergency information card"
    ],
    medicalDisclaimer: "MindSaathi is created solely as an assistive daily routine and caregiver coordination tool. It is NOT a medical diagnostic system and does not claim medical or clinical evaluation capabilities.",
    technicalDetails: "Focused on human-computer interaction (HCI) accessibility for cognitive support. UI features calm color palettes, high contrast ratios, and clear cognitive cues.",
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "student-performance-dashboard",
    title: "Student Performance Dashboard",
    subtitle: "Academic Analytics & Student Management",
    category: "fullstack",
    featured: false,
    description: "A student management and performance dashboard designed to organize student information and present academic data through a structured, user-friendly interface. The project explores backend API integration, database management, and student-related data handling.",
    image: "/projects/student_dashboard.svg",
    technologies: ["Python", "FastAPI", "JavaScript", "MongoDB", "Node.js", "Express.js"],
    features: [
      "Backend REST API endpoints built with FastAPI and Python",
      "Modular routes for user authentication, student profiles, results, and grade analytics",
      "Structured data visualization for semester-by-semester GPA and subject tracking",
      "MongoDB database integration for flexible academic records storage"
    ],
    technicalDetails: "Explores backend API development, asynchronous route handlers in FastAPI, and database query structuring for educational records management.",
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "calorie-tracker",
    title: "Calorie Tracker",
    subtitle: "Interactive Daily Nutrition & Goal Management Tool",
    category: "web",
    featured: false,
    description: "A calorie-tracking web application that allows users to set their own daily calorie goals, record calorie intake, and monitor the calories remaining throughout the day. The application uses a simple, interactive dashboard to make daily calorie tracking understandable and convenient.",
    image: "/projects/calorie_tracker.svg",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Customizable daily calorie goal with instantaneous recalculation across all dashboard modules",
      "Dynamic calories-remaining metric synchronized in real time",
      "Robust input validation preventing invalid or negative calculations",
      "Visual consumption ratio indicators and macronutrient breakdown cards"
    ],
    technicalDetails: "Implemented with vanilla JavaScript and dynamic DOM state management to ensure that whenever a user modifies their daily target, all dependent values update consistently.",
    githubUrl: null,
    liveUrl: null,
    hasCalorieWidget: true
  },
  {
    id: "student-task-manager",
    title: "Student Task Manager",
    subtitle: "Academic Productivity & Task Organizer",
    category: "web",
    featured: false,
    description: "A productivity web application designed to help students organize daily tasks, manage academic activities, and track their progress. The application focuses on a clean, intuitive interface that makes task management simple and convenient.",
    image: "/projects/student_task.svg",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Clean task cards with clear visual hierarchy and urgency badges",
      "Categorized workflow stages: In Progress, Upcoming Review, and Completed",
      "Responsive layout optimized for both desktop and mobile studying sessions",
      "Fast, clutter-free user interface designed for student productivity"
    ],
    technicalDetails: "Built focusing on usability, CSS layout models, and straightforward client-side state handling without heavy external library dependencies.",
    githubUrl: null,
    liveUrl: null
  }
];

export const educationData = {
  currentDegree: {
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Artificial Intelligence and Machine Learning (AIML)",
    institution: "IPS Academy Institute of Engineering and Science",
    location: "Indore, Madhya Pradesh, India",
    currentStatus: "Third Year (Fifth Semester)",
    expectedGraduation: 2028,
    relevantCoursework: [
      "Machine Learning & Pattern Recognition",
      "Data Structures & Algorithms (C++)",
      "Database Management Systems & SQL",
      "Python Programming & Scientific Computing",
      "Object Oriented Programming",
      "Software Engineering Fundamentals"
    ]
  },
  schoolEducation: {
    // Left cleanly expandable without inventing marks or schools
    note: "Secondary and Higher Secondary education completed with science & mathematics stream. Details will be updated with certified marksheets."
  }
};

export const certificates = [
  {
    id: "python-ml-iitb",
    title: "Python for Machine Learning Training",
    issuer: "Spoken Tutorial (IIT Bombay) & EduPyramids",
    institution: "IPS Academy Institute of Engineering and Science",
    date: "27 April 2026",
    score: "98.00%",
    credits: "2 Credits",
    image: "/certificates/python_ml_iit_bombay.jpg",
    verified: true,
    signatories: "Prof. Kannan M Moudgalya (Inventor, Spoken Tutorial, IIT Bombay) | Invigilated by Abhilasha Vyas & Megha Chokhada (IPS Academy)",
    description: "Successfully completed the Python for Machine Learning training and passed the remote online examination conducted directly from IIT Bombay with a 98% score."
  },
  {
    id: "deloitte-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "June 27th, 2026",
    image: "/certificates/deloitte_data_analytics.png",
    verified: true,
    verificationCode: "99YP2mpjCazf6gWG2 / User: 6a40204b3f1171b245ceb98f",
    signatories: "Tina McCreery (Chief Human Resources Officer, Deloitte)",
    description: "Completed practical tasks in Data Analysis and Forensic Technology within Deloitte's virtual job simulation program."
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "AWS Academy",
    date: "04/26/2026",
    badgeType: "Cloud Foundations Training Badge (20 Hours)",
    image: "/certificates/aws_cloud_foundations.jpg",
    verified: true,
    credlyUrl: "https://www.credly.com/go/hVKvxINu",
    description: "Completed 20 hours of official AWS Academy curriculum covering fundamental cloud architecture, AWS core services, security, compliance, and cloud pricing."
  },
  {
    id: "booqln-internship",
    title: "Compulsory Internship Program Certificate",
    issuer: "Booqln (Registered MSME, Govt. of India)",
    period: "March 2026 – May 2026",
    image: "/certificates/booqln_internship.jpg",
    verified: true,
    signatories: "Jeevith B K (CEO, Booqln)",
    description: "Awarded for outstanding completion of the compulsory internship program at Booqln from March 2026 to May 2026."
  },
  {
    id: "nptel-data-analytics-python",
    title: "Data Analytics with Python",
    issuer: "NPTEL & IIT Roorkee (MoE Govt. of India / Swayam)",
    date: "Jan–Apr 2026 (12-Week Course)",
    score: "58% Consolidated",
    credits: "4 Recommended Credits",
    image: "/certificates/nptel_data_analytics_python.jpg",
    verified: true,
    verificationCode: "Roll No: NPTEL26CS86S656401068 | Certified Candidates: 15,086",
    signatories: "Prof. Kaushik Ghosh (Coordinator CEC) & Prof. Ranjana Pathania (Coordinator NPTEL, IIT Roorkee)",
    description: "Successfully completed the 12-week national certification course 'Data Analytics with Python' organized by Indian Institute of Technology Roorkee (IIT Roorkee) with proctored exam score of 33/75 and assignments score of 24.69/25."
  }
];

export const hackathonsAndAchievements = [
  {
    id: "sih-2026",
    title: "Smart India Hackathon (SIH) 2026 Exploration",
    category: "National Hackathon Preparation & Architecture",
    organization: "Ministry of Education / AICTE",
    year: "2026",
    description: "Actively researched SIH 2026 problem statements, conceptualized practical technical architectures, prepared presentation decks, and practiced solution pitches and technical defense."
  }
];
