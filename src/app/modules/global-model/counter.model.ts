import { model, Schema } from 'mongoose';

// Counter schema for managing sequential project IDs
const CounterSchema = new Schema({
  name: { type: String, required: true, unique: true },
  seq: { type: Number, required: true, default: 0 }, // Start at 0
});

// Counter model
export const Counter = model('UserCounter', CounterSchema);
