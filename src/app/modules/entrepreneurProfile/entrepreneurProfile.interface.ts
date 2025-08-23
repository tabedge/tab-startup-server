import { Types } from 'mongoose';

export interface IEntrepreneur {
  userId: Types.ObjectId;

  founders: {
    names: string[];
    technicalFounder: string;
    coFounders: boolean;
    coFounderNames?: string[];
  };

  company: {
    name: string;
    shortDescription: string;
    linkedIn?: string;
    twitter?: string;
    website?: string;
    product: string;
    location: string;
  };

  stage: 'idea' | 'prototype' | 'launched' | 'scaling'; // dropdown
  industry: string;

  funding: {
    amountSeeking: number;
    currency: string;
    equityOffered: number;
  };

  traction?: {
    usersCount?: number;
    revenue?: number;
    growthRate?: string;
  };

  createdAt?: Date;
  updatedAt?: Date;
}
