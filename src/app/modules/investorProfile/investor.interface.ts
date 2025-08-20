import { Types } from "mongoose";

export interface IInvestor {
  _id?: Types.ObjectId;
  experience: string;
  industryFocus: string[];
  linkedinProfile?: string;
  twitterHandle?: string;
  portfolioSize: number;
  preferredStage: string;
}
