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
};
export type SideBarNav = {
  title: string;
  disabled?: boolean;
  external?: true;
  icon?: keyof typeof Icon;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export type MarketingConfig = {
  mainNav: NavItem[];
};

export type DashboardConfig = {
  mainNav: NavItem[];
  sideBarNav: SideBarNav[];
};
