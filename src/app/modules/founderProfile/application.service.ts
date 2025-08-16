/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '../user/user.model';
import Founder from './application.model';

const updateUserApplication = async (userId: any, applicationData: any) => {
  const user = await User.findById(userId);
  console.log({ user });
  if (!user) {
    throw new Error('User not found!');
  }

  const applicationId = user.founder;
  if (!applicationId) {
    throw new Error('No application found for this user!');
  }

  const updatedApplication = await Founder.findByIdAndUpdate(
    applicationId,
    applicationData,
    { new: true, runValidators: true },
  );

  return updatedApplication;
};

export const ApplicationServices = {
  updateUserApplication,
};
