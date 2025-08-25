import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import { EntrepreneurProfileServices } from './entrepreneurProfile.service';
import { JwtPayload } from 'jsonwebtoken';

const createEntrepreneurProfile = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const { userId } = req.user as JwtPayload;
  console.log({ userId });
  console.log('Payload-->', payload);
  const data = await EntrepreneurProfileServices.createEntrepreneurProfile(payload, userId);

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
