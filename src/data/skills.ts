export interface SkillCategory {
  title: string;
  color: "violet" | "blue" | "cyan";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "ML & AI",
    color: "violet",
    skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face", "Computer Vision", "NLP", "Deep Learning", "Generative AI", "Model Quantization", "LangChain", "LangGraph", "YOLO"],
  },
  {
    title: "Development",
    color: "blue",
    skills: ["Python", "C++", "TypeScript", "JavaScript", "Django", "FastAPI", "Flask", "React", "Next.js", "Flutter", "REST APIs"],
  },
  {
    title: "Tools & Infrastructure",
    color: "cyan",
    skills: ["Docker", "AWS", "Azure", "PostgreSQL", "MongoDB", "CUDA", "Git", "Jupyter", "Google Colab", "Linux"],
  },
];
