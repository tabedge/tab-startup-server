import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import { InvestorService } from './investor.service';

const createInvestor = catchAsync(async (req: Request, res: Response) => {
  const investorData = req.body;
  const result = await InvestorService.createInvestor(investorData);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Investor created successfully',
    data: result,
  });
});

const getInvestors = catchAsync(async (req: Request, res: Response) => {
  const result = await InvestorService.getInvestors();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Investors retrieved successfully',
    data: result,
  });
});

const getInvestorById = catchAsync(async (req: Request, res: Response) => {
  const { investorId } = req.params;
  const result = await InvestorService.getInvestorById(investorId);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Investor not found',
      data: null,
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Investor retrieved successfully',
    data: result,
  });
});

const updateInvestor = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.query;
  const updateData = req.body;
  const result = await InvestorService.updateInvestor(userId, updateData);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Investor not found',
      data: null,
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Investor updated successfully',
    data: result,
  });
});

const deleteInvestor = catchAsync(async (req: Request, res: Response) => {
  const { investorId } = req.params;
  const result = await InvestorService.deleteInvestor(investorId);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Investor not found',
      data: null,
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Investor deleted successfully',
    data: result,
  });
});

export const InvestorController = {
  createInvestor,
  getInvestors,
  getInvestorById,
  updateInvestor,
  deleteInvestor,
};
