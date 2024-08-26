import {
  AboutTemplate,
  ContactDetails,
  Description,
  Education,
  Experience,
  TechStack,
} from '@anx/portfolio-shared-ui';
import { AboutState } from '../../model/portfolio.state.types';
import { About } from '../../model/about.types';
import { extractHeaderData } from './common.adaptors';

const extractContactDetails = (
  contactDetails: About['contactDetails']
): ContactDetails => {
  return {
    emailId: contactDetails.emailId,
    header: extractHeaderData(contactDetails.title, contactDetails.description),
    phoneNumber: contactDetails.phoneNumber,
  };
};

const extractDescription = (description: About['description']): Description => {
  return {
    descriptions: description.descriptions,
    header: extractHeaderData(description.title, description.description),
  };
};

const extractEducation = (education: About['education']): Education => {
  return {
    header: extractHeaderData(education.title, education.description),
    schools: education.schools,
  };
};

const extractExperience = (experience: About['experience']): Experience => {
  return {
    experiences: experience.experiences,
    header: extractHeaderData(experience.title, experience.description),
    highlights: experience.highlights,
  };
};

const extractTechStack = (techStack: About['techStack']): TechStack => {
  return {
    header: extractHeaderData(techStack.title, techStack.description),
    stacks: techStack.stacks,
  };
};

export const extractAboutStaticData = (
  aboutState: AboutState
): AboutTemplate => {
  return {
    contactDetails: extractContactDetails(aboutState.data.contactDetails),
    description: extractDescription(aboutState.data.description),
    education: extractEducation(aboutState.data.education),
    experience: extractExperience(aboutState.data.experience),
    techStack: extractTechStack(aboutState.data.techStack),
  };
};
