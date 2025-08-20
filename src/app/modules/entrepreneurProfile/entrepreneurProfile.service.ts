import httpStatus from 'http-status-codes';
import AppError from '../../errorHelpers/AppError';
import { User } from '../user/user.model';
import { IEntrepreneur } from './entrepreneurProfile.interface';

import { Types } from 'mongoose';
import { EntrepreneurProfile } from './entrepreneurProfile.model';

const createEntrepreneurProfile = async (payload: IEntrepreneur) => {
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

  // Create profile
  const result = await EntrepreneurProfile.create({ ...data, userId });

  // Link profile to user
  await User.findByIdAndUpdate(userId, { entrepreneur_profile: result._id }, { new: true });

  return result;
};

export const EntrepreneurProfileServices = {
  createEntrepreneurProfile,
};
