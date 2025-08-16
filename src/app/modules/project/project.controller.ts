/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { ProjectService } from './project.service';

const createProject = catchAsync(async (req: Request, res: Response) => {
  const projectData = req.body;

  const result = await ProjectService.createProject(projectData);
  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

// const updateProject = catchAsync(async(req:Request, res:Response)=>{
//   const {logoImage, bannerImage}= req

// })

const getProjects = catchAsync(async (req: Request, res: Response) => {
  const { category, search, userId } = req.query;
  const filter = { category, search, userId };
  const result = await ProjectService.getProjects(filter);

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects retrieved successfully',
    data: result,
  });
});

const getProjectById = catchAsync(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const result = await ProjectService.getProjectById(projectId);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Project not found',
      data: [],
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  });
});

const uploadImages = catchAsync(async (req: Request, res: Response) => {
  console.log(req.files);
  console.log(req.body);
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const updateData = req.body;
  const result = await ProjectService.updateProject(projectId, updateData);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Project not found',
      data: [],
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const result = await ProjectService.deleteProject(Number(projectId));

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Project not found',
      data: [],
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});

export const ProjectController = {
  uploadImages,
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
