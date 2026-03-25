export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "experience" | "education" | "leadership";
}

export const timelineItems: TimelineItem[] = [
  {
    title: "Computer Vision Engineer",
    organization: "Startup",
    period: "2026 — Present",
    description: "Building production computer vision systems and AI pipelines at a fast-paced startup.",
    type: "experience",
  },
  {
    title: "Teaching Assistant",
    organization: "University of Management and Technology",
    period: "Oct 2025 — Present",
    description: "TA for Deep Learning and Theory of Automata. Assisting with labs in Python, PyTorch, and TensorFlow. Conducting graded assessments and one-on-one guidance for 100+ students.",
    type: "experience",
  },
  {
    title: "AI/ML Intern",
    organization: "Texense",
    period: "Jul 2025 — Sep 2025",
    description: "Contributed to production-level AI/ML solutions. Worked on model development, optimization, and deployment in a startup environment.",
    type: "experience",
  },
  {
    title: "Teaching Assistant",
    organization: "University of Management and Technology",
    period: "Mar 2024 — Oct 2025",
    description: "Assisted in teaching OOP, Data Structures, Database Systems, ML/DL, and Operating Systems. Mentored students in complex programming concepts.",
    type: "experience",
  },
  {
    title: "Peer Mentor",
    organization: "University of Management and Technology",
    period: "Nov 2023 — Feb 2024",
    description: "Peer tutor for Programming Fundamentals in Fall 2023.",
    type: "experience",
  },
  {
    title: "BS Computer Science",
    organization: "University of Management and Technology",
    period: "2022 — 2026",
    description: "GPA: 3.82/4.0. Dean's Award (Fall 2023), Rector's Award (Fall 2024, 4.0 GPA), Merit Award (Spring 2025). Coursework: ML/DL, NLP, Data Structures, SE, Database, OS.",
    type: "education",
  },
  {
    title: "Pre-Engineering",
    organization: "Punjab College of Engineering & Technology",
    period: "2020 — 2022",
    description: "High school diploma with Grade A in Pre-Engineering.",
    type: "education",
  },
  {
    title: "Beta Microsoft Student Ambassador",
    organization: "Microsoft",
    period: "Jan 2024 — Dec 2025",
    description: "Global campus leader helping create tech communities and share technical knowledge. Organized Connect Lahore MLSA Summit uniting 15 universities.",
    type: "leadership",
  },
  {
    title: "Strategy Co-Lead",
    organization: "MLSA Lahore",
    period: "2025",
    description: "Driving impactful initiatives and creating experiences as Strategy Co-Lead at Microsoft Learn Student Ambassadors Lahore chapter.",
    type: "leadership",
  },
  {
    title: "AI/ML Team Lead",
    organization: "Google Developer Group on Campus — UMT",
    period: "2026",
    description: "Leading the AI/ML team helping students understand, build, and apply machine learning beyond theory.",
    type: "leadership",
  },
  {
    title: "Z.ai for Startups Program",
    organization: "Z.ai",
    period: "2026",
    description: "Accepted into Z.ai for Startups with DeepContext. Receiving dedicated technical support, priority API access, and early model access.",
    type: "leadership",
  },
];
