import { Schema, model } from 'mongoose';
import { TApplication } from './application.interface';

// Define Application schema
const FounderSchema: Schema<TApplication> = new Schema(
  {
    company: {
      name: { type: String, default: '' },
      description: { type: String, default: '' },
      url: { type: String, default: '' },
      product: { type: String, default: '' },
      location: { type: String, default: '' },
      locationReason: { type: String, default: '' },
    },
    curious: {
      discovery: { type: String, default: '' },
      experience: { type: String, default: '' },
    },
    equity: {
      legalEntity: { type: Boolean, default: false },
      investment: { type: Boolean, default: false },
      fundraising: { type: Boolean, default: false },
      country: { type: String, default: '' },
    },
    founders: {
      names: { type: String, default: '' },
      technicalFounder: { type: String, default: '' },
      cofounders: { type: Array, default: [] },
    },
    ideas: {
      expertise: { type: String, default: '' },
      competitors: { type: String, default: '' },
      moneyMaking: { type: String, default: '' },
      category: { type: String, default: '' },
    },
    progress: {
      status: { type: String, default: '' },
      timeSpent: { type: String, default: '' },
      techStack: { type: String, default: '' },
      productDemo: { type: String, default: '' },
      selling: { type: Boolean, default: false },
    },
  },
  { timestamps: true },
);

const Founder = model('Founder', FounderSchema);
export default Founder;
