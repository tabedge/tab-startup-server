import { Types } from 'mongoose';
import httpStatus from 'http-status-codes';
import AppError from '../../errorHelpers/AppError';
import { User } from '../user/user.model';
import { IInvestorProfile } from './investorProfile.interface';
import { InvestorProfile } from './investorProfile.model';

const createInvestorProfile = async (payload: IInvestorProfile) => {
  const { userId, ...data } = payload;
  // Validate ObjectId
  if (!Types.ObjectId.isValid(userId)) {
    throw new AppError(httpStatus.BAD_REQUEST, `Invalid userId: ${userId}`);
  }
  // Check if user exists
  const userExists = await User.findById(userId);
  if (!userExists) {
    throw new AppError(httpStatus.NOT_FOUND, `User not found by your given id ${userId}`);
  }

  const linkedinExit = await InvestorProfile.findOne({ linkedIn: payload.linkedIn });

  if (linkedinExit) {
    throw new AppError(httpStatus.BAD_REQUEST, `Profile already created ${linkedinExit.linkedIn}`);
  }

  // Create profile
  const result = await InvestorProfile.create({ ...data, userId });

  // Link profile to user
  await User.findByIdAndUpdate(userId, { investor_profile: result._id }, { new: true });

  return result;
};

export const InvestorProfileServices = {
  createInvestorProfile,
};
