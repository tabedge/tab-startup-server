/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { TUser } from './user.interface';
import { Counter } from '../global-model/counter.model';

// User schema
const UserSchema: Schema<TUser> = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['investor', 'entrepreneur'] },
    founder: {
      type: Schema.Types.ObjectId,
      ref: 'Founder',
    },
    investor: {
      type: Schema.Types.ObjectId,
      ref: 'Investor',
    },
    userId: { type: Number, unique: true }, // User ID starts at 10,001
  },
  { timestamps: true },
);

// Pre-save hook to hash the password
UserSchema.pre('save', async function (next) {
  const user = this;

  // Hash password
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  // Generate user ID
  if (!user.userId) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { name: 'userId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true, setDefaultsOnInsert: true },
      );

      // If counter is newly created, ensure `seq` starts at 10,000
      if (!counter) {
        const newCounter = new Counter({ name: 'userId', seq: 10000 });
        await newCounter.save();
        user.userId = 10001; // First user ID
      } else {
        user.userId = counter.seq + 1; // Incremented user ID
      }
    } catch (error: any) {
      return next(error);
    }
  }

  next();
});

// Post-save hook to clear password in the response
UserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

const User = model<TUser>('User', UserSchema);

export default User;
