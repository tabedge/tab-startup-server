import httpStatus from 'http-status-codes';
import AppError from '../../errorHelpers/AppError';
import { User } from '../user/user.model';
import { IEntrepreneur } from './entrepreneurProfile.interface';
import { EntrepreneurProfile } from './entrepreneurProfile.model';

const createEntrepreneurProfile = async (payload: IEntrepreneur) => {
  // Check if user exists
  const userExists = await User.findById(payload.userId);
  if (!userExists) {
    throw new AppError(httpStatus.NOT_FOUND, `User not found by your given id ${payload.userId}`);
  }

  // Create profile
  const result = await EntrepreneurProfile.create(payload);

  // Link profile to user
  await User.findByIdAndUpdate(payload.userId, { entrepreneur_profile: result._id }, { new: true });

  return result;
};

export const EntrepreneurProfileServices = {
  createEntrepreneurProfile,
};
