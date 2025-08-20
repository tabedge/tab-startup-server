import { Types } from 'mongoose';

export interface IInvestorProfile {
  _id: Types.ObjectId;
  investmentExperience: string;
  linkedIn?: string;
  twitter?: string;
  portfolioSize: number;
  investmentStage: string;
  industryFocus: string[];
  userId: Types.ObjectId; // Reference to User
}
