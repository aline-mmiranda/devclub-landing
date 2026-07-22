export interface GuaranteeStep {
  id: string;
  number: string;
  title: string;
  description?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const guaranteeSteps: GuaranteeStep[] = [
  {
    id: 'purchase',
    number: '01',
    title: 'Compre hoje',
  },
  {
    id: 'trial',
    number: '02',
    title: 'Use durante 7 dias',
  },
  {
    id: 'refund',
    number: '03',
    title: 'Não gostou?',
    description: 'Receba 100% do seu dinheiro de volta',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'programming-knowledge',
    question: 'Preciso saber programar?',
    answer:
      'Não. O conteúdo foi estruturado para acompanhar você desde os primeiros fundamentos até a construção de projetos mais completos. Você poderá evoluir passo a passo, mesmo começando do zero.',
  },
  {
    id: 'certificate',
    question: 'O curso possui certificado?',
    answer:
      'Sim. Após concluir os requisitos da formação, você poderá emitir um certificado para comprovar sua participação e adicionar ao currículo ou perfil profissional.',
  },
  {
    id: 'bank-slip-installments',
    question: 'Posso parcelar no boleto?',
    answer:
      'As condições de pagamento podem variar conforme a oferta disponível. Entre em contato com o suporte para consultar as opções de parcelamento e encontrar a alternativa mais adequada para você.',
  },
];