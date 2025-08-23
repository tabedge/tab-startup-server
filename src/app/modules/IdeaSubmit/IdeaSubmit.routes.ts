import { Router } from 'express';
import { IdeaSubmitController } from './IdeaSubmit.controller';

const router = Router();

router.post('/create', IdeaSubmitController.createIdea);

export const IdeaSubmitRouter = router;
