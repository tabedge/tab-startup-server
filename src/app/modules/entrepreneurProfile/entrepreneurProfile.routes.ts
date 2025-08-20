import { Router } from 'express';
import { EntrepreneurProfileController } from './entrepreneurProfile.controller';

const router = Router();

router.post('/create', EntrepreneurProfileController.createEntrepreneurProfile);

export const EntrepreneurProfileRouter = router;
