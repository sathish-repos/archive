import { Header } from '@anx-shared-ng-portfolio';

export const extractHeaderData = (
  title: string,
  description: string
): Header => {
  return {
    title,
    description,
  };
};

export const extractError = (error: Error | undefined): Error | undefined => {
  return error ? new Error(error.message || 'Some error Happened') : undefined;
};
