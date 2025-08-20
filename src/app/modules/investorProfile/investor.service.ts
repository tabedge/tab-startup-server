/* eslint-disable @typescript-eslint/no-explicit-any */
import Investor from './investor.model';
import { IInvestor } from './investor.interface';
import { User } from '../user/user.model';


const createInvestor = async (investorData: IInvestor) => {
  const investor = await Investor.create(investorData);
  return investor;
};

const getInvestors = async (): Promise<IInvestor[]> => {
  return await Investor.find();
};

const getInvestorById = async (investorId: string) => {
  return await Investor.findById(investorId);
};

const updateInvestor = async (userId: any, updateData: Partial<IInvestor>) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found!');
  }

  const investorId = user.investor;
  if (!investorId) {
    throw new Error('No application found for this user!');
  }

  const updatedInvestor = await Investor.findByIdAndUpdate(
    investorId,
    updateData,
    { new: true, runValidators: true },
  );

  return updatedInvestor;
};

const deleteInvestor = async (investorId: string) => {
  return await Investor.findByIdAndDelete(investorId);
};

export const InvestorService = {
  createInvestor,
  getInvestors,
  getInvestorById,
  updateInvestor,
  deleteInvestor,
};
