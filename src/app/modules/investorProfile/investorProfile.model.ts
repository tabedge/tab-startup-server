import { model, Schema } from 'mongoose';
import { IInvestorProfile } from './investorProfile.interface';

const investorProfileSchema = new Schema<IInvestorProfile>(
  {
    investmentExperience: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
    },
    twitter: {
      type: String,
    },
    portfolioSize: {
      type: Number,
      required: true,
    },
    investmentStage: {
      type: String,
      required: true,
    },
    industryFocus: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const InvestorProfile = model<IInvestorProfile>('InvestorProfile', investorProfileSchema);

export { InvestorProfile };
