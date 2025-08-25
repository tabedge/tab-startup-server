import httpStatus from 'http-status-codes';
import AppError from '../../errorHelpers/AppError';
import { User } from '../user/user.model';
import { IInvestorProfile } from './investorProfile.interface';
import { InvestorProfile } from './investorProfile.model';

const createInvestorProfile = async (payload: IInvestorProfile, userId: string) => {
  // console.log('PAYLOAD-->', payload);

  // Validate ObjectId

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
  const result = await InvestorProfile.create(payload);

  // Link profile to user
  await User.findByIdAndUpdate(userId, { investor_profile: result._id }, { new: true });

  return result;
};

export const InvestorProfileServices = {
  createInvestorProfile,
};
