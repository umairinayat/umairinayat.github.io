export interface Competition {
  title: string;
  position: string;
  description: string;
  year: number;
}

export interface Award {
  title: string;
  subtitle: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export const competitions: Competition[] = [
  {
    title: "TechnoVerse Comsat ML Competition",
    position: "3rd",
    description: "66 tree species classification with 118k instances",
    year: 2025,
  },
  {
    title: "SofTech 2025 ML Challenge",
    position: "4th",
    description: "Hospital readmission prediction — FAST Lahore, national-level",
    year: 2025,
  },
];

export const awards: Award[] = [
  { title: "Dean's Award", subtitle: "Fall 2023" },
  { title: "Rector's Award", subtitle: "Fall 2024 — 4.0 GPA" },
  { title: "Merit Award", subtitle: "Spring 2025" },
  { title: "Z.ai for Startups", subtitle: "Accepted 2026" },
];

export const certifications: Certification[] = [
  { title: "Machine Learning Specialization", issuer: "Andrew Ng / Coursera" },
  { title: "Deep Learning Specialization", issuer: "Coursera" },
  { title: "Data Scientist in Python", issuer: "DataCamp" },
  { title: "MLOps Bootcamp", issuer: "10+ End-to-End ML Projects" },
];
