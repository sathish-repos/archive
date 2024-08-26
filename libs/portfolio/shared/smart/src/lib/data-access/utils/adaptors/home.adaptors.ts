import { HomeTemplate, Project, Projects } from '@anx/portfolio-shared-ui';
import { HomeState } from '../../model/portfolio.state.types';
import { extractHeaderData } from './common.adaptors';
import { Home } from '../../model/home.types';

const extractProjectArr = (
  projects: Home['projects']['projects']
): Project[] => {
  return projects.map((project) => {
    return {
      header: extractHeaderData(project.title, project.description),
      images: project.images,
      url: project.url,
    };
  });
};

const extractProjects = (projects: Home['projects']): Projects => {
  return {
    header: extractHeaderData(projects.title, projects.description),
    projects: extractProjectArr(projects.projects),
  };
};

export const extractHomeStaticData = (homeState: HomeState): HomeTemplate => {
  return {
    hero: extractHeaderData(homeState.data.title, homeState.data.description),
    projects: extractProjects(homeState.data.projects),
  };
};
