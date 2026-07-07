import { Project, Internship, Education, Skill, Certification, Patent } from './types';

export const personalInfo = {
  name: 'Dharun J',
  role: 'Aspiring Full Stack Developer',
  location: 'Coimbatore, Tamil Nadu',
  email: 'dharunj5678@gmail.com',
  github: 'https://github.com', // fallback/default
  linkedin: 'https://linkedin.com', // fallback/default
  about: 'I am passionate about building responsive and user-friendly web applications. I have skills in HTML, CSS, JavaScript, Java, and backend fundamentals. I enjoy creating clean UI, scalable APIs, and real-world projects.',
  tagline: 'Designing immersive frontends. Building robust backends.',
};

export const educationList: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Engineering',
    institution: 'SNS College of Engineering',
    duration: '2024 – 2028',
    grade: 'CGPA: 8.18',
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary School Education',
    institution: 'State Board of Tamil Nadu',
    duration: '2022 – 2024',
    grade: '83%',
  },
];

export const skillsList: Skill[] = [
  // Programming
  { name: 'Java', category: 'programming' },
  { name: 'Python', category: 'programming' },
  // Web
  { name: 'HTML5', category: 'web' },
  { name: 'CSS3', category: 'web' },
  { name: 'JavaScript', category: 'web' },
  // Database
  { name: 'MySQL', category: 'database' },
  // Tools
  { name: 'Flutter', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
];

export const internshipList: Internship[] = [
  {
    id: 'intern-1',
    role: 'Full Stack Development Intern',
    company: 'Conoscenza',
    duration: 'Remote | Internship',
    description: 'Contributed to full stack development practices, building responsive client-side pages and integrating databases for core business logic.',
    highlights: [
      'Engineered modern, pixel-perfect user interfaces with optimized render performance.',
      'Implemented backend API endpoints, linking databases to streamline operations.',
      'Collaborated on agile workflows, contributing code documentation and peer reviews.',
    ],
  },
  {
    id: 'intern-2',
    role: 'Java Programming Intern',
    company: 'Codsoft',
    duration: 'Remote | Internship',
    description: 'Focused on developing solid object-oriented Java applications, mastering core paradigms, multi-threading, and graphical UI design.',
    highlights: [
      'Designed and coded multiple utility applications using core Java and GUI frameworks.',
      'Refactored existing codebases to optimize algorithm efficiency and reduce resource overhead.',
      'Practiced structured test-driven development methodologies to resolve complex bugs.',
    ],
  },
];

export const projectList: Project[] = [
  {
    id: 'proj-1',
    title: 'Resale E-mart',
    description: 'An interactive e-commerce platform designed for buying and selling second-hand computer accessories, accessories and gadgets with database integrations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    category: 'Full Stack Web App',
    highlights: [
      'Designed clean listing forms, real-time product cards, and visual categorization tags.',
      'Developed robust search and filter algorithms utilizing underlying relational schemas.',
      'Integrated complete local session state and secure client-side transaction flow.',
    ],
  },
  {
    id: 'proj-2',
    title: 'FitBuddy',
    description: 'A comprehensive fitness tracking companion application with seamless API integration and modern responsive UI design.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'MySQL'],
    category: 'Mobile / Hybrid App',
    highlights: [
      'Implemented rich user dashboards that monitor dynamic workout sessions and calorie intake.',
      'Integrated real-time fitness data endpoints to fetch curated routines and tips.',
      'Engineered responsive visual controls with custom gesture navigations.',
    ],
  },
  {
    id: 'proj-3',
    title: 'Smartz',
    description: 'An intuitive financial planning and budgeting application designed to help users track expenses and formulate long-term goals.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    category: 'Web Application',
    highlights: [
      'Created dynamic visual charts to break down expenditures and illustrate saving metrics.',
      'Implemented real-time local storage caching to maintain budget states across sessions.',
      'Designed a neat, interactive calculator for compound interest and tax estimations.',
    ],
  },
];

export const certificationList: Certification[] = [
  {
    id: 'cert-1',
    title: 'Oracle AI Foundation Associate',
    issuer: 'Oracle',
  },
  {
    id: 'cert-2',
    title: 'Databricks AI/BI for Data Analysts',
    issuer: 'Databricks',
  },
  {
    id: 'cert-3',
    title: 'Government Technical Education Certification',
    issuer: 'Department of Technical Education (Tamil Nadu)',
  },
];

export const patentDetails: Patent = {
  title: 'IoT and AI-Based System for Structural Integrity and Damage Prediction',
  description: 'An intelligent monitoring system leveraging internet-of-things sensors and deep neural networks to evaluate building structural health, identify miniature fissures, and predict prospective structural failure metrics before visual deterioration commences.',
  status: 'Published / Filed',
};
