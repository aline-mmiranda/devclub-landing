export type TestimonialSize = 'featured' | 'standard' | 'compact';

export interface CommunityTestimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  size: TestimonialSize;
  initials: string;
  highlight?: string;
}

export const featuredCommunityTestimonial: CommunityTestimonial = {
  id: 'vicente-talento',
  name: 'Vicente Talento',
  role: 'Product Designer',
  initials: 'VT',
  size: 'featured',
  highlight: 'Uma nova perspectiva de carreira',
  quote:
    'O DevClub mudou completamente a forma como eu enxergava tecnologia. Não foi apenas sobre aprender código, mas sobre desenvolver confiança, visão de produto e a capacidade de transformar ideias em experiências reais.',
};

export const communityTestimonials: CommunityTestimonial[] = [
  {
    id: 'kacio-felipe',
    name: 'Kácio Felipe',
    role: 'Desenvolvedor Front-end',
    initials: 'KF',
    size: 'standard',
    highlight: 'Evolução constante',
    quote:
      'Encontrei uma comunidade que realmente incentiva a evolução. Cada aula e cada troca me fizeram avançar um pouco mais.',
  },
  {
    id: 'rodolfo-mori',
    name: 'Rodolfo Mori',
    role: 'Software Engineer',
    initials: 'RM',
    size: 'compact',
    quote:
      'Aprender com um caminho claro fez toda a diferença. O processo ficou mais leve, prático e possível.',
  },
  {
    id: 'fernanda-agustinho',
    name: 'Fernanda Agustinho',
    role: 'Desenvolvedora Full Stack',
    initials: 'FA',
    size: 'standard',
    highlight: 'Da insegurança para a prática',
    quote:
      'Eu tinha muita insegurança para construir projetos sozinha. Com o DevClub, passei a entender o processo e ganhei autonomia para colocar minhas ideias em produção.',
  },
  {
    id: 'henrique',
    name: 'Henrique',
    role: 'Desenvolvedor Back-end',
    initials: 'HE',
    size: 'compact',
    quote:
      'A comunidade me mostrou que ninguém precisa enfrentar a transição de carreira completamente sozinho.',
  },
  {
    id: 'marcio',
    name: 'Márcio',
    role: 'Desenvolvedor Mobile',
    initials: 'MA',
    size: 'standard',
    highlight: 'Projetos que geram confiança',
    quote:
      'A combinação de prática, direcionamento e comunidade me ajudou a construir projetos que finalmente representam o profissional que quero ser.',
  },
  {
    id: 'juliana',
    name: 'Juliana',
    role: 'Desenvolvedora Front-end',
    initials: 'JU',
    size: 'compact',
    quote:
      'Foi aqui que estudar programação deixou de parecer um objetivo distante e virou parte da minha rotina.',
  },
  {
    id: 'mateus',
    name: 'Mateus',
    role: 'Full Stack Developer',
    initials: 'MT',
    size: 'standard',
    highlight: 'Clareza para seguir em frente',
    quote:
      'Mais do que conteúdo, encontrei clareza. Hoje consigo identificar meus próximos passos e evoluir de forma muito mais intencional.',
  },
];