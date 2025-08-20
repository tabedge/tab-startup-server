import { Types } from 'mongoose';

export interface IEntrepreneur {
  founders: {
    names: string;
    technicalFounder: string;
    coFounders: boolean;
    coFounderNames?: string[];
  };
  company: {
    name: string;
    shortDescription: string;
    website?: string;
    product: string;
    location: string;
    locationReason: string;
  };
  progress: {
    status: string;
    timeSpent: string;
    techStack: string;
    productDemo?: string;
    selling: boolean;
    revenue: boolean;
  };
  ideas: {
    whyThisIdea: string;
    expertise: string;
    competitors: string;
    differentiation: string;
    moneyMaking: string;
    category: string;
  };
  equity: {
    legalEntity: boolean;
    investment: boolean;
    fundraising: boolean;
    country: string;
  };
  curious: {
    discovery: string;
    priorPrograms: string;
  };
  userId: Types.ObjectId;
}
