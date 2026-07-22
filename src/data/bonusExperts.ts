export interface BonusExpert {
  id: string;
  name: string;
  specialty: string;
  image: string;
  imagePosition?: string;
}

export const bonusExperts: readonly BonusExpert[] = [
  {
    id: 'bruno-biagioni',
    name: 'Bruno Biagioni',
    specialty: 'Design, produto e experiências digitais',
    image: '/images/experts/bruno-biagioni.webp',
    imagePosition: 'center',
  },
  {
    id: 'radilson-gomes',
    name: 'Radilson Gomes',
    specialty: 'Engenharia de software e carreira',
    image: '/images/experts/radilson-gomes.webp',
    imagePosition: 'center',
  },
  {
    id: 'gabe-bo',
    name: 'Gabe Bo',
    specialty: 'Criatividade, conteúdo e posicionamento',
    image: '/images/experts/gabe-bo.webp',
    imagePosition: 'center',
  },
  {
    id: 'aparicio-junior',
    name: 'Aparicio Júnior',
    specialty: 'Tecnologia, negócios e inovação',
    image: '/images/experts/aparicio-junior.webp',
    imagePosition: 'center',
  },
  {
    id: 'nasser-yo',
    name: 'Nasser Yo',
    specialty: 'Inteligência artificial e automações',
    image: '/images/experts/nasser-yo.webp',
    imagePosition: 'center',
  },
] as const;