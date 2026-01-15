import { LogoItem } from "./logo";
import { ProjectMedia } from "./project";

export type ProjectSectionType = | "his-registration" | "erm" | "queue-display";

export interface Portofolio {
  id: string;
  sectionType: ProjectSectionType;

  title: string;
  subtitle?: string;

  description: string;

  role: {
    title: string;
    scope?: string;
  };

  contributions: string[];

  techStack: LogoItem[];

  media?: ProjectMedia[];

  featured?: boolean;
}
