export interface ResumeData {
  personal: {
    name: string;
    nameEn?: string;
    title: string;
    titleEn?: string;
    photo?: string;
    phone: string;
    email: string;
    location: string;
    github?: string;
    portfolio?: string;
    linkedin?: string;
  };
  summary: string;
  aboutMe: string;
  education: Education[];
  coreStrengths: string[];
  skills: SkillGroup[];
  services: Service[];
  stats: Stat[];
  projects: Project[];
  experience: Experience[];
  leadership: Leadership[];
  awards: string[];
  testimonials: Testimonial[];
  languages: string[];
  interests: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  college?: string;
  location?: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  courses?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  percentage: number;
}

export interface Project {
  name: string;
  role: string;
  period: string;
  description: string[];
  video?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
}

export interface Leadership {
  organization: string;
  role: string;
  period: string;
  description: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatar?: string;
  text: string;
}

export type TemplateStyle = 'minimal' | 'creative' | 'darktech';

export interface TemplateConfig {
  style: TemplateStyle;
  primaryColor: string;
  fontSize: number;
}

export const DEFAULT_TEMPLATE_CONFIG: TemplateConfig = {
  style: 'minimal',
  primaryColor: '#1a1a1a',
  fontSize: 16,
};
