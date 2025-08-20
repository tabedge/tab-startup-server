export interface TApplication {
  company: {
    name: string;
    description: string;
    url: string;
    product: string;
    location: string;
    locationReason: string;
  };
  curious: {
    discovery: string;
    experience: string;
  };
  equity: {
    legalEntity: boolean;
    investment: boolean;
    fundraising: boolean;
    country: string;
  };
  founders: {
    names: string;
    technicalFounder: string;
    cofounders: string[];
  };
  ideas: {
    expertise: string;
    competitors: string;
    moneyMaking: string;
    category: string;
  };
  progress: {
    status: string;
    timeSpent: string;
    techStack: string;
    productDemo: string;
    selling: boolean;
  };
}
