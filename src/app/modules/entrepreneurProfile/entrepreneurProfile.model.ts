import { Schema, model } from 'mongoose';
import { IEntrepreneur } from './entrepreneurProfile.interface';

const entrepreneurSchema = new Schema<IEntrepreneur>(
  {
    founders: {
      names: {
        type: [String],
        required: true,
      },
      technicalFounder: {
        type: String,
        required: true,
      },
      coFounders: {
        type: Boolean,
        required: true,
      },
      coFounderNames: {
        type: [String],
      },
    },
    company: {
      name: {
        type: String,
        required: true,
      },
      shortDescription: {
        type: String,
        required: true,
        maxlength: 50,
      },
      linkedIn: {
        type: String,
      },
      twitter: {
        type: String,
      },
      website: {
        type: String,
      },
      product: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
    stage: {
      type: String,
      enum: ['idea', 'prototype', 'launched', 'scaling'],
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    funding: {
      amountSeeking: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
      equityOffered: {
        type: Number,
        required: true,
      },
    },
    traction: {
      usersCount: {
        type: Number,
      },
      revenue: {
        type: Number,
      },
      growthRate: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const EntrepreneurProfile = model<IEntrepreneur>('EntrepreneurProfile', entrepreneurSchema);

export { EntrepreneurProfile };
