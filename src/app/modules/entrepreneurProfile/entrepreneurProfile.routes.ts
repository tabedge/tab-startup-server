import { Router } from 'express';
import { EntrepreneurProfileController } from './entrepreneurProfile.controller';
import checkAuth from '../../middlewares/checkAuth';
import { Role } from '../user/user.interface';

const router = Router();

router.post(
  '/create',
  checkAuth(...Object.values(Role)),
  EntrepreneurProfileController.createEntrepreneurProfile,
);

export const EntrepreneurProfileRouter = router;
