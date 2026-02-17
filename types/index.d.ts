export type SiteConfig = {
  name: string;
  url: string;
  ogImage: string;
  description: string;
  links: {
    x: string;
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
}

export type MarketingConfig = {
  mainNav: NavItem[];
}