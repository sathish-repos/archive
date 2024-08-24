import { HeaderFooter, Nav } from '../models/header-footer.types';

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

export const HeaderFooterMocks: HeaderFooter = {
  header: NavMocks,
};
