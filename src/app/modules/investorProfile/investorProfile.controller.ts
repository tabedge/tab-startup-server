import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import { InvestorProfileServices } from './investorProfile.service';

const createInvestorProfile = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const data = await InvestorProfileServices.createInvestorProfile(payload);
  console.log(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Investor Profile create successfully',
    data,
  });
});

export const InvestorProfileController = {
  createInvestorProfile,
};
