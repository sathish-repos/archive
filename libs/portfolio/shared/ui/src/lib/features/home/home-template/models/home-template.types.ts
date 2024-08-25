import { Header } from '@anx-shared-ng-portfolio';

export type Project = {
  header: Header;
  images: string[];
  url: string;
};

export type Projects = {
  header: Header;
  projects: Project[];
};

export type HomeTemplate = {
  hero: Header;
  projects: Projects;
};
