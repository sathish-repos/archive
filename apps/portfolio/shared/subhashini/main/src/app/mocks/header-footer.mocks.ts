import { HeaderFooter, HeaderFooterMocks } from '@anx-shared-ng-portfolio';

export const DefaultHeaderFooterMock: HeaderFooter = {
  ...HeaderFooterMocks,
};

export const HeaderFooterMock = DefaultHeaderFooterMock;
HeaderFooterMock.header[0] = {
  label: 'Subhashini.dev',
  link: '/',
};
