import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  BriefcaseBusiness,
  HeartHandshake,
  MessagesSquare,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react';

export type EcosystemCardLayout =
  | 'featured'
  | 'wide'
  | 'standard'
  | 'compact';

export type EcosystemCardTone =
  | 'green'
  | 'purple'
  | 'blue'
  | 'orange'
  | 'pink'
  | 'cyan'
  | 'neutral';

export interface EcosystemItem {
  id: string;
  title: string;
  description: string;
  eyebrow: string;
  icon: LucideIcon;
  layout: EcosystemCardLayout;
  tone: EcosystemCardTone;
  gridClass:
    | 'recruiter'
    | 'therapist'
    | 'mentoring'
    | 'aiAgents'
    | 'support'
    | 'community'
    | 'jobs';
}

export const ecosystemItems: readonly EcosystemItem[] = [
  {
    id: 'weekly-recruiter',
    title: 'Recrutadora semanal',
    description:
      'Encontros recorrentes para preparar seu posicionamento, currículo e abordagem para processos seletivos.',
    eyebrow: 'Carreira',
    icon: Target,
    layout: 'featured',
    tone: 'green',
    gridClass: 'recruiter',
  },
  {
    id: 'high-performance-therapist',
    title: 'Terapeuta de Alta Performance',
    description:
      'Acompanhamento para desenvolver clareza, confiança e consistência durante sua evolução profissional.',
    eyebrow: 'Performance',
    icon: HeartHandshake,
    layout: 'wide',
    tone: 'purple',
    gridClass: 'therapist',
  },
  {
    id: 'weekly-mentoring',
    title: 'Mentorias semanais',
    description:
      'Contato direto com profissionais experientes para tirar dúvidas e acelerar decisões técnicas.',
    eyebrow: 'Direcionamento',
    icon: Sparkles,
    layout: 'standard',
    tone: 'blue',
    gridClass: 'mentoring',
  },
  {
    id: 'ai-agents',
    title: 'Agentes de IA',
    description:
      'Ferramentas inteligentes que apoiam seus estudos, projetos e rotina de desenvolvimento.',
    eyebrow: 'Inteligência artificial',
    icon: Bot,
    layout: 'standard',
    tone: 'cyan',
    gridClass: 'aiAgents',
  },
  {
    id: 'human-support',
    title: 'Suporte Humano',
    description:
      'Pessoas reais acompanhando suas dúvidas para que nenhum bloqueio precise virar desistência.',
    eyebrow: 'Você não está sozinho',
    icon: MessagesSquare,
    layout: 'compact',
    tone: 'orange',
    gridClass: 'support',
  },
  {
    id: 'community',
    title: 'Comunidade',
    description:
      'Uma rede ativa de estudantes e profissionais compartilhando conhecimento, desafios e conquistas.',
    eyebrow: 'Conexões',
    icon: UsersRound,
    layout: 'wide',
    tone: 'pink',
    gridClass: 'community',
  },
  {
    id: 'exclusive-jobs',
    title: 'Vagas Exclusivas',
    description:
      'Oportunidades selecionadas para aproximar talentos preparados das empresas certas.',
    eyebrow: 'Oportunidades',
    icon: BriefcaseBusiness,
    layout: 'compact',
    tone: 'neutral',
    gridClass: 'jobs',
  },
];