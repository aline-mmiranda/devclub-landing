import type { LucideIcon } from 'lucide-react';
import {
  Github,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterNavigationGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink extends FooterLink {
  icon: LucideIcon;
}

export const footerNavigationGroups: FooterNavigationGroup[] = [
  {
    title: 'Links',
    links: [
      {
        label: 'Início',
        href: '#inicio',
      },
      {
        label: 'Formações',
        href: '#formacoes',
      },
      {
        label: 'Comunidade',
        href: '#comunidade',
      },
      {
        label: 'Perguntas frequentes',
        href: '#faq',
      },
    ],
  },
  {
    title: 'Cursos',
    links: [
      {
        label: 'Front End',
        href: '#formacoes',
      },
      {
        label: 'Back End',
        href: '#formacoes',
      },
      {
        label: 'Full Stack',
        href: '#formacoes',
      },
      {
        label: 'Mobile',
        href: '#formacoes',
      },
      {
        label: 'IA & Automações',
        href: '#formacoes',
      },
      {
        label: 'Análise de Dados',
        href: '#formacoes',
      },
    ],
  },
  {
    title: 'Links úteis',
    links: [
      {
        label: 'Suporte',
        href: '#suporte',
      },
      {
        label: 'Política de privacidade',
        href: '/politica-de-privacidade',
      },
      {
        label: 'Termos de uso',
        href: '/termos-de-uso',
      },
      {
        label: 'Contato',
        href: '#contato',
      },
    ],
  },
];

export const skillsLinks: FooterLink[] = [
  {
    label: 'UI Skills',
    href: '#ui-skills',
  },
  {
    label: 'Figma Skills',
    href: '#figma-skills',
  },
  {
    label: 'Design System',
    href: '#design-system',
  },
  {
    label: 'Coding Skills',
    href: '#coding-skills',
  },
];

export const footerSocialLinks: FooterSocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: Instagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: Youtube,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: Github,
  },
];