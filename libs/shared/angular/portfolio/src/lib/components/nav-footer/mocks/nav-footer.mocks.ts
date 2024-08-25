import { Footer, HeaderFooter, Nav } from '../models/nav-footer.types';

export const NavMocks: Nav[] = [
  {
    label: 'Sathishkumar.dev',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
];

export const FooterMocks: Footer = {
  copyrights: `Copyright @ 2024`,
  version: 'ver: 1.0.0',
};

export const HeaderFooterMocks: HeaderFooter = {
  header: NavMocks,
  footer: FooterMocks,
};
