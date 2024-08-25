import { Home } from '../model/home.types';

export const HomeMocks: Home = {
  title: 'Sathishkumar',
  description: 'Front-end Developer. Repo Architect. UI. System Design & More.',
  projects: {
    title: 'Projects',
    description: "Some of the projects that I'm worked on",
    projects: [
      {
        title: 'Todo',
        description:
          'Its an todo application with angular frontend and firebase as a backend',
        images: ['todo.png', 'app-2.webp'],
        url: 'https://todo-firebase-123.web.app/',
      },
      {
        title: 'Shuriken',
        description:
          'Its an todo application with angular frontend and firebase as a backend',
        images: ['todo.png', 'app-2.webp'],
        url: 'https://todo-firebase-123.web.app/',
      },
    ],
  },
};
