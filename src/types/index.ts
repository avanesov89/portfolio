export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  description: string;
  intro?: string[];
  details?: {
    label: string;
    value: string;
  }[];
  overview?: string[];
  image: string;
  tags?: string[];
  taskTitle?: string;
  task?: string;
  taskBullets?: string[];
  contentSections?: {
    title: string;
    intro?: string;
    paragraphsBefore?: string[];
    bullets?: string[];
    paragraphs?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    feedbackQuotes?: string[];
    feedbackSource?: string;
    images?: {
      src: string;
      alt: string;
      caption?: string;
    }[];
    stepMarker?: "number" | "dot" | "none";
    steps?: {
      title: string;
      paragraphs: string[];
      images?: {
        src: string;
        alt: string;
        caption?: string;
      }[];
      outcome?: string;
    }[];
  }[];
  contentNote?: string;
  contentNoteBeforeSectionTitle?: string;
  solution: string;
  resultTitle?: string;
  result?: string;
  gallery: string[];
  pdfUrl?: string;  // Ссылка на PDF файл с полным описанием
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
}
