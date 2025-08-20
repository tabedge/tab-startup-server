import { NextFunction, Request, Response, Router } from 'express';
import { AuthController } from './auth.controller';
import checkAuth from '../../middlewares/checkAuth';

import passport from 'passport';
import envVars from '../../config/env';
import { Role } from '../user/user.interface';

const router = Router();

router.post('/login', AuthController.credentialsLogin);
router.post('/refresh-token', AuthController.getNewAccessToken);
router.post('/logout', AuthController.logout);
router.post('/change-password', checkAuth(...Object.values(Role)), AuthController.changePassword);
router.post('/set-password', checkAuth(...Object.values(Role)), AuthController.setPassword);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', checkAuth(...Object.values(Role)), AuthController.resetPassword);

router.get('/google', async (req: Request, res: Response, next: NextFunction) => {
  const redirect = req.query.redirect || '/';
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    state: redirect as string,
  })(req, res, next);
});

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${envVars.FRONTEND_URL}/login?error=There is some issues with your account. Please contact with our support team `,
  }),
  AuthController.googleCallbackController,
);

const AuthRouter = router;
export default AuthRouter;
