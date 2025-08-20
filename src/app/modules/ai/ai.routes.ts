import { Router } from 'express';
import { AIControllers } from './ai.controller';

const router = Router();

router.post('/chat', AIControllers.createChat);

export const AIRoutes = router;
