import express from 'express';
import { ApplicationControllers } from './application.controller';

const router = express.Router();

router.patch(
  '/update-application',
  ApplicationControllers.updateUserApplication,
);

export const FounderRoutes = router;
