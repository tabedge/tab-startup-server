import { Router } from 'express';
import { InvestorProfileController } from './investorProfile.controller';

const router = Router();

router.post('/create', InvestorProfileController.createInvestorProfile);

export const InvestorProfileRouter = router;
