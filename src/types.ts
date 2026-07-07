export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

export interface Skill {
  name: string;
  category: 'programming' | 'web' | 'database' | 'tools';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}

export interface Patent {
  title: string;
  description: string;
  status: string;
}
