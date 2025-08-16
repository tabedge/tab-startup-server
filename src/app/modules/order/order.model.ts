/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

// Interface for OrderIdCounter document
interface IOrderIdCounterDocument extends Document {
  _id: string;
  sequenceValue: number;
}

// OrderIdCounter Schema
const OrderIdCounterSchema: Schema = new Schema({
  _id: { type: String, required: true }, // Collection name or field identifier
  sequenceValue: { type: Number, required: true },
});

// OrderIdCounter Model
const OrderIdCounter = model<IOrderIdCounterDocument>(
  'OrderIdCounter',
  OrderIdCounterSchema,
);

// Order Schema
const OrderSchema: Schema = new Schema(
  {
    orderId: { type: Number, unique: true }, // Auto-incremented field
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    amount: { type: Number, required: true },
    percent: { type: Number, required: true },
    trnxId: { type: String, required: true },
    status: {
      type: String,
      enum: ['paid', 'unpaid', 'in-progess'],
      required: true,
    },
  },
  { timestamps: true }, // Automatically manage createdAt and updatedAt fields
);

// Middleware to auto-increment orderId
OrderSchema.pre<TOrder>('save', async function (next) {
  if (!this.isNew) return next(); // Skip if not a new document

  try {
    const counter = await OrderIdCounter.findByIdAndUpdate(
      { _id: 'orderId' }, // Identifier for the counter
      { $inc: { sequenceValue: 1 } }, // Increment sequence
      { new: true, upsert: true }, // Create document if it doesn't exist
    );

    this.orderId = counter.sequenceValue;
    next();
  } catch (error: any) {
    next(error);
  }
});

// Order Model
const Order = model<TOrder>('Order', OrderSchema);

export default Order;
