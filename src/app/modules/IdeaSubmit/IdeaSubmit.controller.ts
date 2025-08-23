import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import { IdeaSubmitServices } from './IdeaSubmit.service';

const createIdea = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const data = await IdeaSubmitServices.createIdea(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Idea create Successfully',
    data,
  });
});

export const IdeaSubmitController = {
  createIdea,
};
