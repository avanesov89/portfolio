export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  task: string;
  solution: string;
  result: string;
  gallery: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  specialty: string;
  period: string;
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface ProfileData {
  name: string;
  position: string;
  tagline: string;
  about: string;
  experience: Experience[];
  cases: CaseStudy[];
  education: Education[];
  certificates: Certificate[];
  hobbies: string[];
  email: string;
  telegram: string;
  linkedin: string;
}
