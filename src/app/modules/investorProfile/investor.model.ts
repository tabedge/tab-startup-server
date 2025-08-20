import { Schema, model } from 'mongoose';
import { IInvestor } from './investor.interface';

const InvestorSchema = new Schema<IInvestor>(
  {
    experience: {
      type: String,
      default: '',
    },
    linkedinProfile: {
      type: String,
      default: null,
    },
    twitterHandle: {
      type: String,
      default: null,
    },
    portfolioSize: {
      type: Number,
      default: 0,
    },
    preferredStage: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  },
);

const Investor = model<IInvestor>('Investor', InvestorSchema);
export default Investor;
