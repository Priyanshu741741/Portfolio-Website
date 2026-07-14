import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import lul from "../../assets/work/lul.png";
import butterfly from "../../assets/butterfly.png";
import solitaire from "../../assets/solitaire.png";

export const TechIcon = {
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  FLUTTER:
    "https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white",
  VERILOG:
    "https://img.shields.io/badge/Verilog-%23F7DF1E.svg?style=for-the-badge&logo=verilog&logoColor=rgb(142%2C0%2C39)",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  C: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  MATERIALUI:
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  WEBPACK:
    "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white",
  SUPABASE:
    "https://img.shields.io/badge/Supabase-1E2E3B?style=for-the-badge&logo=supabase&logoColor=white",
  CHATGPT:
    "https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white",
  FLASK:
    "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
  TENSORFLOW:
    "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
  GEMINI:
    "https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white",
  SQL: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    9,
    {
      id: 0,
      title: "My Hobbies & Interests",
      message: "",
      Icon: solitaire,
      isMinimized: false,
      zIndex: 0,
      program: App.MYHOBBIES,
      prompt: false,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.HACKATHON,
  WorkType.PERSONAL,
  WorkType.SCHOOL,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Windows XP Portfolio Website",
    date: "Jul 2026",
    gitURL: "https://github.com/Priyanshu741741/Priyanshu741741.github.io",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NEXTJS,
      TechIcon.REDUX,
      TechIcon.CSS,
      TechIcon.HTML,
      TechIcon.JAVASCRIPT,
    ],
    gallery: [lul],
    overview: `This is the very portfolio you're currently viewing! I built it as a personalized
    Windows XP-style desktop to present my work in a fun, nostalgic, and memorable way. The site
    is powered by Next.js and TypeScript with Redux for state management. It includes draggable,
    resizable windows, a working Start Menu, taskbar, and multiple "programs" — all evoking the
    classic Windows XP experience that brings back memories of early computing.`,
  },
  {
    id: 2,
    title: "AgroIntel — AI Crop Monitoring App",
    date: "Dec 2025",
    gitURL: "https://github.com/Priyanshu741741/AgroIntel",
    techstack: [
      TechIcon.PYTHON,
      TechIcon.REACT,
      TechIcon.FLASK,
      TechIcon.TENSORFLOW,
      TechIcon.GEMINI,
      TechIcon.CSS,
    ],
    gallery: [],
    overview: `AgroIntel is an AI-powered crop care application using MobileNetV2 to detect
    five common plant diseases from uploaded images. Built during the GDG Solution Challenge
    (Top 10 nationwide), it integrates a real-time Weather API for location-based insights,
    was tested on 300+ labeled images, and reduced crop diagnosis time by 17%. The Flask
    backend pairs with a React frontend. Live: https://agro-intel-101.vercel.app`,
  },
  {
    id: 3,
    title: "Motex",
    date: "Nov 2025 - Dec 2025",
    gitURL: "https://github.com/Priyanshu741741/Motex",
    techstack: [TechIcon.TYPESCRIPT, TechIcon.NEXTJS, TechIcon.CSS],
    gallery: [],
    overview: `Motex is a modern TypeScript web application with a live deployment on Vercel.
    It showcases clean component architecture, responsive design, and smooth user experience
    built with Next.js and TypeScript. Live at: https://motex-nine.vercel.app`,
  },
  {
    id: 4,
    title: "Natwest AI Predictive Forecasting — Stats.AI",
    date: "Apr 2026",
    gitURL:
      "https://github.com/Priyanshu741741/Natwest-AI-Predictive-Forecasting-Stats.AI",
    techstack: [TechIcon.TYPESCRIPT, TechIcon.NEXTJS, TechIcon.PYTHON],
    gallery: [],
    overview: `An AI-driven predictive forecasting platform built for the NatWest AI Hackathon,
    where we finished in the Top 10 teams nationwide. The system analyzes business and financial
    datasets to generate forward-looking statistical predictions using ML techniques, providing
    actionable insights for data-driven decision making.`,
  },
  {
    id: 5,
    title: "EmpowerU — Social Impact Platform",
    date: "Mar 2025 - Aug 2025",
    gitURL: "https://github.com/Priyanshu741741/EmpowerU",
    techstack: [TechIcon.TYPESCRIPT, TechIcon.NEXTJS, TechIcon.CSS],
    gallery: [],
    overview: `EmpowerU is a social impact web platform developed in collaboration with the
    Women Entrepreneurship Cell (WEC). The platform empowers aspiring entrepreneurs by providing
    curated resources, mentorship connections, and a supportive community hub. Built with
    TypeScript and Next.js, with a focus on accessibility and inclusive design.`,
  },
  {
    id: 6,
    title: "PEC Dispensary Management System",
    date: "Oct 2025 - Dec 2025",
    gitURL: "https://github.com/Priyanshu741741/Pec-Dispensary",
    techstack: [TechIcon.TYPESCRIPT, TechIcon.NEXTJS, TechIcon.CSS],
    gallery: [],
    overview: `A comprehensive dispensary management system developed as a B.Tech CSE 5th Semester
    Minor Project at PEC University of Technology, Chandigarh. The system handles patient records,
    medicine inventory management, appointment scheduling, and prescription tracking — streamlining
    dispensary operations for the college community.`,
  },
  {
    id: 7,
    title: "SQL Data Analytics Project",
    date: "Jul 2025",
    gitURL: "https://github.com/Priyanshu741741/sql-data-analytics-project",
    techstack: [TechIcon.SQL],
    gallery: [],
    overview: `An end-to-end SQL data analytics project examining critical business KPIs including
    sales performance, customer behavior analysis, and retention metrics. The project demonstrates
    advanced SQL querying, window functions, Common Table Expressions (CTEs), and data storytelling
    techniques applied to real-world business datasets for actionable strategic insights.`,
  },
  {
    id: 8,
    title: "PathSense",
    date: "Jul 2025",
    gitURL: "https://github.com/Priyanshu741741/PathSense",
    techstack: [TechIcon.PYTHON],
    gallery: [],
    overview: `PathSense is a Python-based path-finding and navigation tool that implements
    classical graph traversal and pathfinding algorithms. The project features real-time
    visualization of route discovery and algorithmic decisions, making it useful for learning
    and demonstrating AI search techniques in an intuitive way.`,
  },
  {
    id: 9,
    title: "ITO-Entrepreneur — Mentor-Startup Platform",
    date: "Feb 2026",
    gitURL: "https://github.com/Priyanshu741741/ITO-Entrepreneur",
    techstack: [TechIcon.REACT, TechIcon.PYTHON, TechIcon.TYPESCRIPT],
    gallery: [],
    overview: `A mentor-startup matching platform featuring 80+ profiles with search and
    filtering. Implemented a KNN-based recommendation model using user preferences and
    category tags to intelligently connect founders with mentors. Engineered 6+ core
    features including mentor matching, profile filtering, and form submission workflows.`,
  },
  {
    id: 10,
    title: "PocketPublish",
    date: "Mar 2025",
    gitURL: "https://github.com/Priyanshu741741/PocketPublish",
    techstack: [TechIcon.JAVASCRIPT, TechIcon.HTML, TechIcon.CSS],
    gallery: [],
    overview: `PocketPublish is a JavaScript web application designed to simplify content
    publishing for small creators and bloggers. It provides a lightweight, accessible interface
    for writing, managing, and publishing content — putting the power of content creation
    directly in your pocket.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "Windows XP Portfolio Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.HACKATHON,
    icon: gdsc,
    title: "AgroIntel — GDG Hackathon",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Motex",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.HACKATHON,
    icon: emptyfile,
    title: "Natwest AI Predictive Forecasting",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "EmpowerU",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.SCHOOL,
    icon: file,
    title: "PEC Dispensary — Minor Project",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
  {
    id: 7,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "SQL Data Analytics",
    content: WorkData[WorkData.findIndex((x) => x.id === 7)],
  },
  {
    id: 8,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "PathSense",
    content: WorkData[WorkData.findIndex((x) => x.id === 8)],
  },
  {
    id: 9,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "ITO-Entrepreneur",
    content: WorkData[WorkData.findIndex((x) => x.id === 9)],
  },
  {
    id: 10,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "PocketPublish",
    content: WorkData[WorkData.findIndex((x) => x.id === 10)],
  },
] as WorkFile[];

// Photos coming soon — replace with your own images
export const PhotoCollection = [] as GalleryImage[];
