export type Home = {
  title: string;
  description: string;
  projects: {
    title: string;
    description: string;
    projects: Array<{
      title: string;
      description: string;
      images: Array<string>;
      url: string;
    }>;
  };
};
