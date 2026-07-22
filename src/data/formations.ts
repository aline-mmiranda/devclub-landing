import type { Formation } from '../types/formation';

export const formations: readonly Formation[] = [
  {
    id: 'front-end',
    name: 'Front End',
    description:
      'Crie interfaces modernas, responsivas e acessíveis com as tecnologias mais utilizadas no mercado.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    icon: 'code',
    ctaLabel: 'Conhecer formação',
    href: '#front-end',
  },
  {
    id: 'back-end',
    name: 'Back End',
    description:
      'Desenvolva APIs, bancos de dados e aplicações robustas preparadas para crescer com segurança.',
    tags: ['Node.js', 'APIs', 'SQL', 'Arquitetura'],
    icon: 'server',
    ctaLabel: 'Conhecer formação',
    href: '#back-end',
  },
  {
    id: 'full-stack',
    name: 'Full Stack',
    description:
      'Domine o desenvolvimento de ponta a ponta e transforme ideias em produtos digitais completos.',
    tags: ['React', 'Node.js', 'TypeScript', 'Deploy'],
    icon: 'layers',
    ctaLabel: 'Conhecer formação',
    href: '#full-stack',
  },
  {
    id: 'mobile',
    name: 'Mobile',
    description:
      'Construa aplicativos multiplataforma com experiências fluidas para dispositivos móveis.',
    tags: ['React Native', 'Expo', 'APIs', 'UX Mobile'],
    icon: 'smartphone',
    ctaLabel: 'Conhecer formação',
    href: '#mobile',
  },
  {
    id: 'gestor-ia-automacoes',
    name: 'Gestor de IA & Automações',
    description:
      'Use inteligência artificial e automações para otimizar processos e criar novas soluções de negócio.',
    tags: ['IA', 'Agentes', 'No-code', 'Automação'],
    icon: 'bot',
    ctaLabel: 'Conhecer formação',
    href: '#gestor-ia-automacoes',
  },
  {
    id: 'analise-de-dados',
    name: 'Análise de Dados',
    description:
      'Transforme dados em decisões através de análises, visualizações e indicadores relevantes.',
    tags: ['Python', 'SQL', 'Dashboards', 'BI'],
    icon: 'chart',
    ctaLabel: 'Conhecer formação',
    href: '#analise-de-dados',
  },
];