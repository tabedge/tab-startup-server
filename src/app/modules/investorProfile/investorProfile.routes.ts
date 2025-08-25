import { Router } from 'express';
import { InvestorProfileController } from './investorProfile.controller';
import checkAuth from '../../middlewares/checkAuth';
import { Role } from '../user/user.interface';

const router = Router();

router.post(
  '/create',
  checkAuth(...Object.values(Role)),
  InvestorProfileController.createInvestorProfile,
);

export const InvestorProfileRouter = router;
