export interface SocialLinks {
  facebook: string;
  linkedin: string;
  instagram: string;
  whatsapp: string;
  email: string;
  phone: string;
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  field: string;
  institution: string;
  status?: string;
  iconName: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  role?: string;
  websiteUrl?: string;
  tag: string;
  highlight?: boolean;
}

export interface VentureItem {
  id: string;
  badge: string;
  title: string;
  role: string;
  foundedYear: string;
  description: string;
  websiteUrl: string;
  ctaText: string;
  highlights: string[];
  theme: 'cyan' | 'indigo' | 'emerald';
  category: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'digital' | 'marketing' | 'tech' | 'travel';
  description: string;
  xPercent: number;
  yPercent: number;
  featured?: boolean;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  category: 'digital' | 'travel';
  description: string;
  subItems?: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  industry: string;
  role: string;
  services: string[];
  description: string;
  category: 'Digital' | 'Marketing' | 'Web' | 'Business' | 'Travel';
  link?: string;
  linkText?: string;
  featured?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  fallbackUrl?: string;
  description: string;
}
