export type Nav = {
  label: string;
  link: string;
};

export type Footer = {
  copyrights: string;
  version?: string;
};

export type HeaderFooter = {
  header: Nav[];
  footer: Footer;
};
