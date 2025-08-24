import httpStatus from 'http-status-codes';
import AppError from '../../errorHelpers/AppError';
import { User } from '../user/user.model';
import { IIdea } from './IdeaSubmit.interface';
import { Idea } from './IdeaSubmit.model';

const createIdea = async (payload: IIdea) => {
  const { userId, ...data } = payload;
  // Validate ObjectId

  // Check if user exists
  const userExists = await User.findById(userId);
  if (!userExists) {
    throw new AppError(httpStatus.NOT_FOUND, `User not found by your given id ${userId}`);
  }

  // Create profile
  const result = await Idea.create({ ...data, userId });

  // Link profile to user
  await User.findByIdAndUpdate(userId, { entrepreneur_profile: result._id }, { new: true });

  return result;
};

export const IdeaSubmitServices = {
  createIdea,
};
