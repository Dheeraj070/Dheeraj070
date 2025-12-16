export interface Project {
  title: string;
  period: string;
  tech: string[];
  description: string[];
  longDescription?: string;
  publication?: string; // Added optional publication field
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  tech: string[];
  points: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
}

export interface Certification {
  title: string;
  period: string;
  issuer?: string;
}

export interface Workshop {
  title: string;
  period: string;
  description: string;
}