/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose";

export type TOrder = {
  isNew: any;
  orderId: number;
  userId: Types.ObjectId;
  projectId: Types.ObjectId;
  amount: number;
  percent: number;
  trnxId: string;
  status: "paid" | "unpaid" | "in-progess";
};
