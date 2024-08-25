import { Header } from '@anx-shared-ng-portfolio';

export type Description = {
  header: Header;
  descriptions: string[];
};

export type Experiences = {
  position: string;
  at: string;
  year: string;
  highlights: string[];
};

export type Experience = {
  header: Header;
  highlights: {
    label: string;
  };
  experiences: Experiences[];
};

export type Schools = {
  education: string;
  name: string;
  year: string;
  score: string;
};

export type Education = {
  header: Header;
  schools: Schools[];
};

export type TechStack = {
  header: Header;
  stacks: string[];
};

export type DropdownItem = {
  label: string;
  value: string;
};

export type ContactDetails = {
  header: Header;
  emailId: DropdownItem;
  phoneNumber: DropdownItem;
};

export type AboutTemplate = {
  description: Description;
  experience: Experience;
  education: Education;
  techStack: TechStack;
  contactDetails: ContactDetails;
};
