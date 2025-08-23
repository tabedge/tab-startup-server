import { Schema, model } from 'mongoose';
import { IIdea } from './IdeaSubmit.interface';

const EntrepreneurSchema = new Schema<IIdea>(
  {
    founders: {
      names: {
        type: String,
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
      coFounderNames: [
        {
          type: String,
        },
      ],
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
      locationReason: {
        type: String,
        required: true,
      },
    },
    progress: {
      status: {
        type: String,
        required: true,
      },
      timeSpent: {
        type: String,
        required: true,
      },
      techStack: {
        type: String,
        required: true,
      },
      productDemo: {
        type: String,
      },
      selling: {
        type: Boolean,
        required: true,
      },
      revenue: {
        type: Boolean,
        required: true,
      },
    },
    ideas: {
      whyThisIdea: {
        type: String,
        required: true,
      },
      expertise: {
        type: String,
        required: true,
      },
      competitors: {
        type: String,
        required: true,
      },
      differentiation: {
        type: String,
        required: true,
      },
      moneyMaking: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
    },
    equity: {
      legalEntity: {
        type: Boolean,
        required: true,
      },
      investment: {
        type: Boolean,
        required: true,
      },
      fundraising: {
        type: Boolean,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    curious: {
      discovery: {
        type: String,
        required: true,
      },
      priorPrograms: {
        type: String,
        required: true,
      },
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Idea = model<IIdea>('Idea', EntrepreneurSchema);

export { Idea };
