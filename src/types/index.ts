export type Currency = 'USD' | 'GTQ';

export type PlanType = 'MODALIDAD_A' | 'MODALIDAD_B';

export interface PlanDetails {
  id: PlanType;
  title: string;
  subtitle: string;
  badge: string;
  minAmountUSD: number;
  minAmountGTQ: number;
  targetMonthlyYieldMin: number;
  targetMonthlyYieldMax: number;
  termMonths: number[];
  audience: string;
  keyBenefits: string[];
  legalFramework: string;
}

export interface EducationalArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    takeaways: string[];
  };
}

export interface MarketQuote {
  symbol: string;
  name: string;
  price: number;
  change: number;
  isPositive: boolean;
}
