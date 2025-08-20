import mongoose, { Schema } from 'mongoose';
import { AiTrainingDoc } from './ai.interface';

const AiTrainingSchema = new Schema<AiTrainingDoc>(
  {
    question: { type: String, required: true, unique: true, index: true },
    answer: { type: String, required: true },
    tags: [{ type: String }],
    helpfulCount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

// Text index for fuzzy-ish relevance (question)
AiTrainingSchema.index({ question: 'text' }, { name: 'question_text_idx' });

export const AiTrainingModel =
  mongoose.models.ChatGptTraining ||
  mongoose.model<AiTrainingDoc>('ChatGptTraining', AiTrainingSchema);
