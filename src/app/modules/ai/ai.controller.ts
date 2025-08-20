import httpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AIServices } from './ai.service';

const createChat = catchAsync(async (req: Request, res: Response) => {
  const { message } = req.body;
  const data = await AIServices.createChat(message);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: '',
    data,
  });
});

export const AIControllers = {
  createChat,
};
