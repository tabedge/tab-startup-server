/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import { ApplicationServices } from './application.service';
import catchAsync from '../../utils/catchAsync';

const updateUserApplication = catchAsync(async (req, res, next) => {
  const { userId } = req.query; // Using req.query instead of req.params
  const applicationData = req.body;
  // console.log("userId=>", userId);
  // console.log("data=>", applicationData);

  // Call service to update the application
  const result = await ApplicationServices.updateUserApplication(userId, applicationData);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Application not found or update failed',
      data: null,
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application updated successfully',
    data: result,
  });
});

export const ApplicationControllers = {
  updateUserApplication,
};
