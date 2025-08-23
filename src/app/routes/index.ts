import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import AuthRouter from '../modules/auth/auth.route';
import { OTPRouter } from '../modules/otp/otp.route';
import { ContactRouter } from '../modules/contact/contact.route';
import { InvestorProfileRouter } from '../modules/investorProfile/investorProfile.routes';
import { EntrepreneurProfileRouter } from '../modules/entrepreneurProfile/entrepreneurProfile.routes';
import { IdeaSubmitRouter } from '../modules/IdeaSubmit/IdeaSubmit.routes';

const router = Router();

interface IModuleRoutes {
  path: string;
  element: Router;
}

const moduleRoutes: IModuleRoutes[] = [
  {
    path: '/user',
    element: UserRoutes,
  },
  {
    path: '/auth',
    element: AuthRouter,
  },
  {
    path: '/otp',
    element: OTPRouter,
  },
  {
    path: '/contact',
    element: ContactRouter,
  },
  {
    path: '/investor-profile',
    element: InvestorProfileRouter,
  },
  {
    path: '/entrepreneur-profile',
    element: EntrepreneurProfileRouter,
  },
  {
    path: '/idea-submit',
    element: IdeaSubmitRouter,
  },
];

moduleRoutes.forEach((r) => {
  router.use(r.path, r.element);
});

export default router;
