export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

export interface NavItem {
  label: string;
  href: string;
}