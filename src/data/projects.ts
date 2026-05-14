import projectsData from "./projects.json";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  githubNote?: string;
};

export const projects = projectsData as Project[];
