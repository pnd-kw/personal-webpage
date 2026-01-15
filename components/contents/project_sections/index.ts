import { Portofolio, ProjectSectionType } from "@/types/portofolio";
import HisSection from "./HisSection";
import ErmSection from "./ErmSection";
import { ComponentType } from "react";
import QueueDisplaySection from "./QueueDisplaySection";

type ProjectSectionComponent = ComponentType<{ project: Portofolio }>;

export const projectSectionMap: Record<
  ProjectSectionType,
  ProjectSectionComponent
> = {
  "his-registration": HisSection,
  erm: ErmSection,
  "queue-display": QueueDisplaySection,
} as const;
