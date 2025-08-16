/* eslint-disable @typescript-eslint/no-unused-vars */
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res, next) => {
  const userData = req.body;

  // Call service to create the user in the database
  const result = await UserServices.createUserIntoDB(userData);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    });
  }

  // If the user is successfully created
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const result = await UserServices.getSingleUserFromDB(userId);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'User not found',
      data: [],
    });
  }
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Retrivie successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getSingleUser,
};
