import { About } from '../model/about.types';

export const AboutMocks: About = {
  description: {
    title: 'Software Developer (Angular & Frontend Technologies)',
    description: '2+ Years of Experience',
    descriptions: [
      'Proficient in crafting dynamic and responsive user interfaces using Angular\n  with state management via NgRx, adept at reactive programming with RxJS.\n  Skilled in utilizing Bootstrap for layout and design, while ensuring semantic\n  and accessible HTML, along with efficient and scalable CSS.',
      'Strong JavaScript and TypeScript development skills, with experience in\n  integrating designs from Figma into functional applications. Proficient in API\n  testing and collaboration using Postman, with solid version control practices\n  using Git, GitHub, and GitLab.',
      'I foster open communication and teamwork, leveraging my technical proficiency\n  in design tools and front-end development to challenges and learn\n  continuously. I prioritize culture alongside product, believing a supportive\n  and collaborative environment is key to success. I excel at tackling diverse\n  design challenges and pushing boundaries. Always learning, I seek new\n  experiences to improve.',
    ],
  },
  experience: {
    title: 'Work Experiences',
    description: 'some of the work that i have done',
    highlights: {
      label: 'Project Highlights:',
    },
    experiences: [
      {
        position: 'System Engineer',
        at: '@TCS',
        year: '2022-Present',
        highlights: [
          'Led the development of a feature-rich e-commerce platform, enhancing user experience and increasing conversion rates by 20%.',
          'Implemented a real-time analytics dashboard using Angular and NgRx, providing actionable insights and improving decision-making processes.',
          'Collaborated on a cross-functional team to integrate multiple micro front-ends into a cohesive enterprise application, streamlining workflow efficiency.',
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    description: 'My educational qualifications',
    schools: [
      {
        education: 'B.E Computer Science and Engineering',
        name: 'From: TCET',
        year: '2017-2021',
        score: '76.5%',
      },
      {
        education: 'Higher Sec School',
        name: 'From: Govt. Hrs School',
        year: '2015-2017',
        score: '87.25%',
      },
      {
        education: 'High School',
        name: 'From: Govt. High School',
        year: '2015-2017',
        score: '76.6%',
      },
    ],
  },
  techStack: {
    title: 'Tech stack',
    description: 'Some of the technology stacks that i know of',
    stacks: [
      'Front-End',
      'RxJs',
      'NgRX',
      'Bootstrap',
      'Figma',
      'PostMan',
      'Firebase',
      'Github',
    ],
  },
  contactDetails: {
    title: 'Contact Details',
    description:
      'Feel free to reach out for projects, collaborations, or just to say hello! Currently seeking new opportunities.',
    emailId: {
      label: 'Email Id: ',
      value: 'me.sathish.git@gmail.com',
    },
    phoneNumber: {
      label: 'Ph Number: ',
      value: '+91 6380891338',
    },
  },
};
