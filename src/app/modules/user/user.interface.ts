import { Types } from 'mongoose';

export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: 'investor' | 'entrepreneur';
  founder: Types.ObjectId;
  investor: Types.ObjectId;
  userId: number;
};
