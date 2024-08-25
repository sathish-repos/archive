import { Header } from '@anx-shared-ng-portfolio';
import { HomeTemplate, Projects } from '../models/home-template.types';

export const HeroMocks: Header = {
  title: 'Sathishkumar',
  description: 'Front-end Developer. Repo Architect. UI. System Design & More.',
};

export const ProjectsHeaderMocks: Header = {
  title: 'Projects',
  description: `Some of the projects that I'm worked on`,
};

export const ProjectHeaderMocks: Header = {
  title: 'Todo',
  description: `Its an todo application with angular frontend and firebase as a backend`,
};

export const ProjectsMocks: Projects = {
  header: ProjectsHeaderMocks,
  projects: [
    {
      header: ProjectHeaderMocks,
      images: ['todo.png', 'app-2.webp'],
      url: 'https://todo-firebase-123.web.app/',
    },
    {
      header: {
        title: 'Shuriken',
        description: `Its an todo application with angular frontend and firebase as a backend`,
      },
      images: ['todo.png', 'app-2.webp'],
      url: 'https://todo-firebase-123.web.app/',
    },
  ],
};

export const HomeTemplateMocks: HomeTemplate = {
  hero: HeroMocks,
  projects: ProjectsMocks,
};
