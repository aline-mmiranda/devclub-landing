export type CareerLevel = 'Júnior' | 'Pleno' | 'Sênior';

export type SalaryMarketId = 'brazil' | 'international';

export interface SalaryData {
  level: CareerLevel;
  value: number;
  formattedValue: string;
}

export interface SalaryMarket {
  id: SalaryMarketId;
  label: string;
  description: string;
  currencyLabel: string;
  salaries: SalaryData[];
}

export const salaryMarkets: SalaryMarket[] = [
  {
    id: 'brazil',
    label: 'Brasil',
    description: 'Média salarial anual no mercado nacional',
    currencyLabel: 'Real brasileiro',
    salaries: [
      {
        level: 'Júnior',
        value: 70_800,
        formattedValue: 'R$ 70.800',
      },
      {
        level: 'Pleno',
        value: 140_400,
        formattedValue: 'R$ 140.400',
      },
      {
        level: 'Sênior',
        value: 196_800,
        formattedValue: 'R$ 196.800',
      },
    ],
  },
  {
    id: 'international',
    label: 'Internacional',
    description: 'Média salarial anual no mercado internacional',
    currencyLabel: 'Dólar americano',
    salaries: [
      {
        level: 'Júnior',
        value: 27_000,
        formattedValue: 'US$ 27.000',
      },
      {
        level: 'Pleno',
        value: 40_000,
        formattedValue: 'US$ 40.000',
      },
      {
        level: 'Sênior',
        value: 61_000,
        formattedValue: 'US$ 61.000',
      },
    ],
  },
];