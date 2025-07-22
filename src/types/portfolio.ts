
export interface projectType {
  title: string;
  image: string[];
  date: string;
  subtitle: string;
  technologies: string[];
  description: string;
  githubLink?: string;
  workLinks?: {
    platform: string;
    link: string;
  }[];
}
