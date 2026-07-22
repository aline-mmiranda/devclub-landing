import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  CodeXml,
  GraduationCap,
  Map,
  Trophy,
} from 'lucide-react';

export type PlatformCardSize = 'large' | 'medium' | 'small';
export type PlatformCardAccent = 'green' | 'purple' | 'neutral';

export interface PlatformMetric {
  label: string;
  value: string;
}

export interface PlatformModule {
  id: string;
  title: string;
  description: string;
  eyebrow: string;
  icon: LucideIcon;
  size: PlatformCardSize;
  accent: PlatformCardAccent;
  metric?: PlatformMetric;
  tags?: readonly string[];
}

export const platformModules: readonly PlatformModule[] = [
  {
    id: 'learning-platform',
    title: 'Plataforma de Ensino',
    description:
      'Aulas organizadas, progresso centralizado e uma experiência criada para manter você em movimento.',
    eyebrow: 'Continue aprendendo',
    icon: GraduationCap,
    size: 'large',
    accent: 'green',
    metric: {
      label: 'Progresso geral',
      value: '72%',
    },
    tags: ['Aulas práticas', 'Projetos reais', 'Certificados'],
  },
  {
    id: 'learning-paths',
    title: 'Trilhas',
    description:
      'Caminhos estruturados para você avançar do fundamento ao mercado.',
    eyebrow: 'Sua jornada',
    icon: Map,
    size: 'medium',
    accent: 'purple',
    metric: {
      label: 'Trilhas ativas',
      value: '03',
    },
  },
  {
    id: 'club-agents',
    title: 'Club Agents',
    description:
      'Agentes inteligentes disponíveis para revisar, explicar e acelerar seu desenvolvimento.',
    eyebrow: 'Inteligência artificial',
    icon: Bot,
    size: 'medium',
    accent: 'green',
    tags: ['Code Review', 'Carreira', 'Debug'],
  },
  {
    id: 'playground',
    title: 'Playground',
    description:
      'Um ambiente seguro para testar ideias, escrever código e transformar teoria em prática.',
    eyebrow: 'Aprenda fazendo',
    icon: CodeXml,
    size: 'small',
    accent: 'neutral',
    metric: {
      label: 'Desafios concluídos',
      value: '28',
    },
  },
  {
    id: 'hall-of-fame',
    title: 'Mural da Fama',
    description:
      'Conquistas reais de membros que transformaram aprendizado em novas oportunidades.',
    eyebrow: 'Resultados da comunidade',
    icon: Trophy,
    size: 'small',
    accent: 'purple',
    metric: {
      label: 'Novas histórias',
      value: '+120',
    },
  },
];