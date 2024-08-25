export type About = {
  description: {
    title: string;
    description: string;
    descriptions: Array<string>;
  };
  experience: {
    title: string;
    description: string;
    highlights: {
      label: string;
    };
    experiences: Array<{
      position: string;
      at: string;
      year: string;
      highlights: Array<string>;
    }>;
  };
  education: {
    title: string;
    description: string;
    schools: Array<{
      education: string;
      name: string;
      year: string;
      score: string;
    }>;
  };
  techStack: {
    title: string;
    description: string;
    stacks: Array<string>;
  };
  contactDetails: {
    title: string;
    description: string;
    emailId: {
      label: string;
      value: string;
    };
    phoneNumber: {
      label: string;
      value: string;
    };
  };
};
