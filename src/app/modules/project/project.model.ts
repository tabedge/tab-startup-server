/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, Document, model } from 'mongoose';
import { IProject } from './project.interface';

// Interface for Project document
interface IProjectDocument extends IProject, Document {}

// Interface for Counter document
interface IProjectIdCounterDocument extends Document {
  _id: string;
  sequenceValue: number;
}

// Counter Schema
const ProjectIdCounterSchema: Schema = new Schema({
  _id: { type: String, required: true }, // Collection name or field identifier
  sequenceValue: { type: Number, required: true },
});

const ProjectIdCounter = model<IProjectIdCounterDocument>(
  'ProjectIdCounter',
  ProjectIdCounterSchema,
);

// Project Schema
const ProjectSchema: Schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  projectId: { type: Number, unique: true }, // Auto-incremented field
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  netProfit: { type: Number, required: true },
  askingPrice: { type: Number, required: true },
  siteAge: { type: Number, required: true },
  companyValuation: { type: Number, required: true },
  presentAssetValue: { type: Number, required: true },
  requiredFund: { type: Number, required: true },
  shareValue: { type: Number, required: true },
  logoImage: { type: String, default: null },
  bannerImages: { type: [String], default: [] },
  isDeleted: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
});

// Middleware to auto-increment projectId
ProjectSchema.pre<IProjectDocument>('save', async function (next) {
  if (!this.isNew) return next(); // Skip if not a new document

  try {
    const counter = await ProjectIdCounter.findByIdAndUpdate(
      { _id: 'projectId' }, // Identifier for the counter
      { $inc: { sequenceValue: 1 } }, // Increment sequence
      { new: true, upsert: true }, // Create document if it doesn't exist
    );

    this.projectId = counter.sequenceValue;
    next();
  } catch (error: any) {
    next(error);
  }
});

const Project = model<IProjectDocument>('Project', ProjectSchema);

export default Project;
