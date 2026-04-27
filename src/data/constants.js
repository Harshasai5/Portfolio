import { Code2, Server, Database, Globe, Cpu, Layout, Users, Trophy, Code, BookOpen, Award } from 'lucide-react';
import emotionImg from '../assets/projects/emotion.jpg';
import nivasImg from '../assets/projects/nivas.jpg';
import multilingualImg from '../assets/projects/multilingual.jpg';
import drugImg from '../assets/projects/drug.jpg';
import b2cImg from '../assets/projects/b2c.jpg';
import multiPersonaImg from '../assets/projects/multi-persona.jpg';

export const PORTFOLIO_DATA = {
  hero: {
    name: "Pabolu Sai Harsha",
    roles: ["AI/ML Engineer", "Full Stack Developer", "Data Analyst", "Automation Engineer"],
    tagline: "Building intelligent, human-interactive systems and automating the future.",
  },

  about: {
    description: "I am an enthusiastic learner and developer in Artificial Intelligence and Machine Learning, with a strong interest in building human-interactive systems. I have gained hands-on experience in Neural Networks, NLP, RAG, Prompt Engineering, and Computer Vision, and developed multiple projects focused on human–system interaction. Additionally, I explore AI automation for business applications and have practical web development experience through real-world projects.",
  },

  flagshipProject: {
    title: "Emotion Based Learning System",
    description: "An AI-driven platform designed to enhance online learning experiences by detecting students' emotions in real time and recommending personalized activities.",
    longDescription: "Problem Statement:\nMost online learning platforms are non-interactive and static, leading to decreasing student motivation and higher dropout rates.\n\nThe Core Problem:\nHow to make online learning adaptive and responsive to students' emotional states to improve engagement and learning outcomes?\n\nProposed Solution:\nAn Emotion-Based Adaptive Learning System that captures student emotions using a webcam, uses an AI (CNN model) to detect emotions in real time, and recommends personalized actions.\n\n💡 KEY IDEA: Transform passive learning into an interactive, emotion-aware system.\n\n📊 Results:\n• Datasets used: FER-2013, RAF-DB\n• ✨ ACHIEVED 69.82% ACCURACY IN EMOTION DETECTION ✨\n• Improved user engagement through adaptive recommendations.",
    tech: ["TensorFlow", "OpenCV", "React", "FastAPI", "MySQL", "Groq API"],
    image: emotionImg,
    demoLink: "#",
    githubLink: "https://github.com/Harshasai5/LearnByEmotion",
  },

  projects: [
    {
      id: 4,
      title: "Nivas - Student Accommodation Finder",
      description: "Nivas is a web-based platform that helps students easily find hostels and rental rooms near their campus. It provides category-based filtering for boys hostels, girls hostels, and private rooms. The system includes search functionality with filters for price, facilities, and location. It features a responsive UI and dynamically fetches data from a MySQL database. Overall, it simplifies the accommodation search process for students.",
      longDescription: "Problem Statement:\nStudents often face difficulty finding suitable hostels or rental rooms near their campus. Information is usually scattered across different platforms, making the search time-consuming. There is no centralized system to filter options based on gender, price, and facilities. Many platforms lack proper UI and do not provide a smooth mobile experience. Contact details and location information are not always easily accessible. This creates confusion and delays in finding the right accommodation.\n\n Proposed Solution:\nTo address this issue, we developed Nivas, a centralized web platform for hostel and room discovery. The system allows users to search and filter accommodations based on category, gender, price, and facilities. It provides a clean, responsive interface with detailed views including contact and location links. All data is dynamically managed through a MySQL database, making it scalable and easy to update. This solution enables students to quickly find suitable accommodation in a simple and efficient way.",
      tech: ["React", "Tilewind CSS", "Node.js", "Express", "MySQL", "XAMPP / Apache"],
      image: nivasImg,
      demoLink: "#",
      githubLink: "https://github.com/Harshasai5/Nivas",
    },
    {
      id: 5,
      title: "Multi Persona Presentation Script Generator",
      description: "The Multi Persona Presentation Script Generator helps users deliver effective presentations by generating audience-specific scripts. Users provide project details, presentation context, and time limit. The system adapts tone, structure, and length by selecting an appropriate speaking persona.",
      longDescription: "Problem Statement:\nMany students and professionals have good projects or ideas, but they struggle to present them effectively. They often use the same explanation for every audience, which leads to confusion or lack of impact. Existing AI tools generate generic content but do not adjust the narration based on the presentation stage, audience type, and time limit.\n\nProposed Solution:\nTo solve this problem, we propose an AI Context-Aware Presentation Narrator. The system allows users to enter either their completed project details or their idea and execution plan, along with context. The system automatically selects the most suitable speaking persona, adjusts tone, controls length, and generates a structured script.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Groq API"],
      image: multiPersonaImg,
      demoLink: "#",
      githubLink: "https://github.com/Harshasai5/Multi_Persona-Persentation_Script_Generator",
    },
    {
      id: 6,
      title: "Multilingual Handwriting Prescription Recognition",
      description: "An AI-based application that extracts and translates handwritten medical prescriptions from regional languages into English using OCR and translation APIs. It serves as the first step toward automated drug analysis.",
      longDescription: "Problem Statement:\nMedical prescriptions are often handwritten in regional languages, making them difficult to interpret. Pharmacists and patients may face challenges in understanding unfamiliar languages. There is no unified system to convert multilingual handwritten prescriptions into a common language, leading to potential errors.\n\nProposed Solution:\nWe developed a system that uses OCR to extract handwritten text from prescription images. The extracted text is then translated into English using a translation API. It supports multiple regional languages and provides a clean interface for easy usage.",
      tech: ["Python", "Streamlit", "Google Cloud Vision API", "Google Cloud Translate API", "Pillow"],
      image: multilingualImg,
      demoLink: "#",
      githubLink: "https://github.com/Harshasai5/Multilingual-Handwritten-Prescription-Recognition-System",
    },
    {
      id: 7,
      title: "Drug-Drug Interactions Checker",
      description: "An AI-based tool that extracts drug names from handwritten prescriptions and detects possible interactions using OCR, spell correction, and fuzzy matching to improve patient safety.",
      longDescription: "Problem Statement:\nHandwritten prescriptions are often difficult to read and interpret accurately. Incorrect interpretation may result in harmful drug-drug interactions. Manual checking is time-consuming and prone to mistakes. There is a lack of automated systems that can process handwritten prescriptions effectively.\n\nProposed Solution:\nWe developed a system that automatically extracts drug names from handwritten prescriptions using OCR. The extracted text is refined using spell-checking and fuzzy matching. The system then compares the identified drugs with a domain-specific interaction database, providing users with detected drug names and highlighting possible interactions.",
      tech: ["Python", "Streamlit", "Google Cloud Vision API", "FuzzyWuzzy", "PySpellChecker", "Pandas"],
      image: drugImg,
      demoLink: "#",
      githubLink: "https://github.com/Harshasai5/Drug_drug_interaction_checker",
    },
    {
      id: 8,
      title: "B2C – Bridge to Career",
      description: "A centralized placement management website designed to bridge the communication gap between the placement cell and students during campus placements. It streamlines communication, automates eligibility checks, and provides structured job-related information.",
      longDescription: "Problem Statement:\nPlacement-related communication happens mostly through WhatsApp groups, causing confusion, missed opportunities, and inefficiency. Faculty struggle to manage branch-specific jobs, multi-level hiring updates, and application reminders. Students often submit non-aligned resumes and miss critical notifications and shortlists.\n\nProposed Solution:\nA centralized placement management website with three modules: Student Module (shows openings, tracks applications, notifications, ATS checker), Main Admin/Placement Cell Module (manages companies, notifications, departments, statuses, analytics), and Department Admin Module (manages department-level students, applications, analytics).\n\nKey Benefits:\nEliminates dependency on WhatsApp groups, ensures branch-specific communication, prevents missed updates, improves resume quality with ATS score feature, and provides actionable placement analytics.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: b2cImg,
      demoLink: "#",
      githubLink: "https://github.com/Harshasai5/B2C-Bridge-to-Career",
    }
  ],

  skills: {
    categories: [
      {
        category: "AI & Machine Learning",
        icon: Cpu,
        skills: [
          { name: "Machine Learning", level: "Intermediate" },
          { name: "Deep Learning", level: "Intermediate" },
          { name: "Prompt engineering", level: "Intermediate" },
          { name: "Computer Vision", level: "Basic" },
          { name: "NLP", level: "Basic" },
          { name: "Generative AI", level: "Basic" }
        ]
      },
      {
        category: "Frameworks & Libraries",
        icon: Layout,
        skills: [
          { name: "NumPy", level: "Intermediate" },
          { name: "Pandas", level: "Intermediate" },
          { name: "Matplotlib", level: "Intermediate" },
          { name: "Seaborn", level: "Intermediate" },
          { name: "Scikit-Learn", level: "Intermediate" },
          { name: "TensorFlow", level: "Intermediate" }
        ]
      },
      {
        category: "Programming Languages",
        icon: Code2,
        skills: [
          { name: "Python", level: "Expert" },
          { name: "Java", level: "Basic" },
          { name: "JavaScript", level: "Intermediate" },
          { name: "PHP", level: "Intermediate" }
        ]
      },
      {
        category: "Web Development",
        icon: Globe,
        skills: [
          { name: "HTML", level: "Intermediate" },
          { name: "CSS", level: "Intermediate" },
          { name: "JS", level: "Intermediate" },
          { name: "React", level: "Intermediate" },
          { name: "Vue.js", level: "Basic" },
          { name: "PHP", level: "Intermediate" },
          { name: "Node.js", level: "Basic" },
          { name: "Express.js", level: "Intermediate" },
          { name: "MySQL", level: "Intermediate" },
          { name: "MongoDB", level: "Basic" },
          { name: "JWT", level: "Intermediate" }
        ]
      },
      {
        category: "Tools & Platforms",
        icon: Server,
        skills: [
          { name: "Power BI", level: "Intermediate" },
          { name: "n8n", level: "Intermediate" },
          { name: "Figma", level: "Intermediate" },
          { name: "ChatGPT", level: "Intermediate" },
          { name: "Antigravity", level: "Intermediate" },
          { name: "Canva", level: "Intermediate" },
          { name: "Jupyter Notebook", level: "Intermediate" },
          { name: "Google Colab", level: "Intermediate" }
        ]
      },
      {
        category: "Soft Skills",
        icon: Users,
        skills: [
          { name: "Team Collaboration" },
          { name: "Task Prioritization" },
          { name: "Critical Thinking" },
          { name: "Emotional Intelligence" },
          { name: "Team Player" },
          { name: "People Management" }
        ]
      }
    ]
  },

  experience: [
    {
      id: 1,
      role: "AIML Intern",
      company: "AICTE @ SRKR Engineering College",
      duration: "Dec 2025 - Feb 2026",
      description: "Completed an academic internship focused on improving online learning systems. Researched e-learning platforms and identified issues in student engagement.",
      achievements: [
        "Project: Emotion-Based Learning System - Built an AI-based platform that analyzes learner emotions using webcam + FER model and provides personalized suggestions.",
        "Served as Team Lead and participated in project ideation.",
        "Developed the Facial Emotion Recognition (FER) model."
      ],
      certificateLink: "https://drive.google.com/file/d/1M3Tqlf58rjzJ_Ew_uWwfnp4peAgeg71F/view?usp=drivesdk"
    },
    {
      id: 2,
      role: "AI/ML Intern",
      company: "Medha @ CBIT Engineering College",
      duration: "June 2025 - Sep 2025",
      description: "Completed an academic research internship in the healthcare AI domain. Independently explored and developed solutions for real-world medical problems.",
      achievements: [
        "Project: Drug-Drug Interaction Checker - Developed an app to analyze handwritten prescriptions, extract drug names, and identify potential harmful interactions.",
        "Project: Multilingual Handwritten Prescription Analyzer - Built a system to extract and interpret prescriptions in multiple languages.",
        "Conducted independent research, identified problems, and designed AI-based healthcare solutions.",
        "Applied OCR and NLP concepts for real-world applications."
      ],
      certificateLink: "https://drive.google.com/file/d/1A66-Xaoe4vgv43eSiVcsgnOCPHOnNE3s/view?usp=drivesdk"
    },
    {
      id: 3,
      role: "Software Development Apprentice",
      company: "PIXELTESTS",
      duration: "Dec 2024 - Feb 2025",
      description: "Completed an apprenticeship under industry mentorship focused on frontend development. Gained hands-on experience in building and improving UI components for real-world applications.",
      achievements: [
        "Learned and implemented frontend development using Vue.js.",
        "Worked on the UI of modules from a real-time marketing tool project.",
        "Focused on user experience, design consistency, and responsiveness.",
        "Gained practical exposure to industry-level development workflow.",
        "Improved skills in frontend frameworks and UI design."
      ],
      certificateLink: "https://drive.google.com/file/d/1U7VNgVahElKVJkWtK12b6J8Y4hfLuRHd/view?usp=drivesdk"
    }
  ],

  journey: [
    {
      stage: "Start",
      title: "The Beginning",
      description: "Began my entrepreneurial journey in my first year by joining Campus Online, a student-driven startup connecting students to exchange needs within the campus. Started with curiosity and gradually became actively involved in execution and team collaboration.",
      year: "Year 1"
    },
    {
      stage: "Leadership",
      title: "Leading & Building",
      description: "In my second year, stepped into a leadership role and led Campus Online for 8 months with a team of six members. Focused on expanding campus reach and executed the 'Snacks Box' service to solve the problem of hygienic and affordable food access for students.",
      year: "Year 2"
    },
    {
      stage: "Execution",
      title: "Scaling Impact",
      description: "Successfully scaled the Snacks Box service to 70+ daily customers, generating consistent revenue and increasing startup visibility. Strengthened skills in execution, problem-solving, and scaling real-world solutions.",
      year: "Year 2"
    },
    {
      stage: "Expansion",
      title: "City-Level Operations",
      description: "Worked as Operations Lead at Bhimavaram Online, managing weekly online housie events. Handled sponsor acquisition, coordinated with 10+ vendors, engaged 50+ participants, and ensured smooth execution with a team of three members.",
      year: "Year 2"
    },
    {
      stage: "Foundation",
      title: "Entrepreneurial Mindset",
      description: "Although active involvement ended in the third year, these experiences built a strong foundation in identifying real-world problems, leading teams, and executing scalable solutions, shaping my future in technology and innovation.",
      year: "Year 3"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Design (CSD)",
      institution: "SRKR Engineering College",
      year: "2023 - 2027",
      cgpa: "8.21"
    }
  ],

  socials: {
    github: "https://github.com/Harshasai5",
    linkedin: "https://www.linkedin.com/in/sai-harsha-pabolu-84b361310",
    email: "saiharsha0501@gmail.com"
  },

  activities: [
    {
      id: 1,
      category: "Achievements",
      icon: Trophy,
      title: "Achievements",
      preview: "2nd Prize in Tech Presentation, Selected for National-Level Hackathon",
      items: [
        {
          title: "2nd Prize — Technical Presentation, Samagra 2K26 Techfest",
          eventDetails: "Sagi Rama Krishnam Raju Engineering College, Bhimavaram | March 5, 2026",
          projectDetail: "Samagra is a college-level technical fest hosting multiple competitions and events. I participated in the technical presentation event and presented my project Emotion-Based Learning System, securing 2nd place for innovation and presentation quality.",
          proofLink: "https://drive.google.com/file/d/1X2P2BF9Duk4seBm6cMltp18n_96NJYBa/view?usp=sharing"
        },
        {
          title: "Selected for National-Level — Smart India Hackathon (Internal Hackathon)",
          eventDetails: "SRKR Engineering College | 2025",
          projectDetail: "The internal hackathon was conducted to shortlist teams for the national-level Smart India Hackathon. I participated in a 12-hour hackathon, where my team proposed a solution to a real-world problem statement and was selected to represent the college at the national level.",
          proofLink: null
        }
      ]
    },
    {
      id: 2,
      category: "Hackathons & Techfests",
      icon: Code,
      title: "Hackathons & Techfests",
      preview: "Prakalp 2K26, Samagra 2K26, Dev Challenge, WebTech Hackathon",
      items: [
        {
          title: "Prakalp 2K26 Techfest",
          eventDetails: "Ramachandra Engineering College, Eluru | April 1–2, 2026",
          projectDetail: "Prakalp is a national-level techfest featuring project expos and competitions. I presented my project Emotion-Based Learning System at the expo, interacted with judges and experts, and gathered feedback to improve the system further.",
          proofLink: "https://drive.google.com/file/d/1NSnP7zhCYnUhhwkjI5_GvOcQEV3aq882/view?usp=drive_link"
        },
        {
          title: "Samagra 2K26 Techfest",
          eventDetails: "SRKR Engineering College, Bhimavaram | March 5, 2026",
          projectDetail: "Samagra is a technical fest conducted by SRKR with multiple department-level events. I participated in the project presentation at the CSD department and presented Multi Persona Presentation Script Generator, focusing on adaptive content generation.",
          proofLink: null
        },
        {
          title: "Dev Challenge Hackathon",
          eventDetails: "Google Developer Groups On Campus SRKR | 2024",
          projectDetail: "This hackathon was organized by GDG On Campus to encourage innovation and problem-solving. I participated as part of a team and pitched an idea for a learning and speaking platform for children with autism, receiving appreciation for creativity and social impact.",
          proofLink: "https://drive.google.com/file/d/1asTpEBtplbQgKqEm_mnNx4xiB1SrosyW/view?usp=sharing"
        },
        {
          title: "WebTech Hackathon (24 Hours)",
          eventDetails: "CSD, SRKR Engineering College | March 14–15, 2024",
          projectDetail: "A 24-hour hackathon focused on web development and real-world problem solving. I worked in a team to design and develop a college/school website, focusing on UI/UX and functionality under time constraints.",
          proofLink: null
        }
      ]
    },
    {
      id: 3,
      category: "Workshops & Programs",
      icon: BookOpen,
      title: "Workshops & Programs",
      preview: "IgniteX 1.0 — Wadhwani Foundation",
      items: [
        {
          title: "IgniteX 1.0 — Wadhwani Foundation",
          eventDetails: "42-Hour Program | 2025",
          projectDetail: "IgniteX is an entrepreneurship development program focused on startup skills. I completed this program, gaining hands-on experience in ideation, prototyping, business modeling, and financial planning.",
          proofLink: "https://drive.google.com/file/d/178g1oZLI8Kx3AxLsa17EaYG_9iEzeNBM/view?usp=drive_link"
        }
      ]
    },
    {
      id: 4,
      category: "Course Certifications",
      icon: Award,
      title: "Course Certifications",
      preview: "Machine Learning & Data Science, Deep Learning",
      items: [
        {
          title: "Machine Learning & Data Science",
          eventDetails: "GeeksforGeeks | 2026",
          projectDetail: "A structured certification program under the National SkillUp initiative. I completed training in machine learning concepts, data analysis, and practical implementations.",
          proofLink: "https://drive.google.com/file/d/19kcqqpwNNaHmvs3l_JdOhogg1Qpg_pEe/view?usp=sharing"
        },
        {
          title: "Deep Learning",
          eventDetails: "Simplilearn | 2025",
          projectDetail: "Completed a deep learning certification covering neural networks, model training, and AI applications, strengthening my foundation in advanced ML concepts.",
          proofLink: "https://drive.google.com/file/d/1ajRqOrJM4agy4nvZ1fYJc37lQXHi_Q9p/view?usp=drive_link"
        }
      ]
    }
  ]
};
