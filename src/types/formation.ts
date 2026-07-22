export type FormationIcon =
  | 'code'
  | 'server'
  | 'layers'
  | 'smartphone'
  | 'bot'
  | 'chart';

export interface Formation {
  id: string;
  name: string;
  description: string;
  tags: readonly string[];
  icon: FormationIcon;
  ctaLabel: string;
  href: string;
}