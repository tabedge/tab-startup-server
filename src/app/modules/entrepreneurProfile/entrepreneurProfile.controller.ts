import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import { EntrepreneurProfileServices } from './entrepreneurProfile.service';

const createEntrepreneurProfile = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const data = await EntrepreneurProfileServices.createEntrepreneurProfile(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Entrepreneur Profile create Successfully',
    data,
  });
});

export const EntrepreneurProfileController = {
  createEntrepreneurProfile,
};
