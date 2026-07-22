export interface HeaderNavigationItem {
  label: string;
  href: string;
}

export const headerNavigation: readonly HeaderNavigationItem[] = [
  {
    label: 'Formações',
    href: '#formacoes',
  },
  {
    label: 'Ecossistema',
    href: '#ecossistema',
  },
  {
    label: 'Plataforma',
    href: '#plataforma',
  },
  {
    label: 'Comunidade',
    href: '#comunidade',
  },
  {
    label: 'FAQ',
    href: '#faq',
  },
] as const;