// project.router.ts

import express from 'express';
// import validateRequest from "../../middleware/validateRequest";
// import { projectValidationSchema } from "./project.validation";
import { ProjectController } from './project.controller';
// import upload from "../../utils/multer"; // Import the multer upload configuration

const router = express.Router();

// POST route to create a project with file uploads (logoImage + bannerImage)
router.post(
  '/',
  // validateRequest(projectValidationSchema),
  ProjectController.createProject,
);

router.get('/', ProjectController.getProjects);
router.get('/:projectId', ProjectController.getProjectById);
router.patch(
  '/:projectId',
  // validateRequest(projectValidationSchema),
  ProjectController.updateProject,
);
router.patch('/upload-image', ProjectController.uploadImages);
router.delete('/:projectId', ProjectController.deleteProject);

export const ProjectRoutes = router;
