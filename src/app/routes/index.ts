import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRotues } from "../modules/auth/auth-route";
import { ProjectRoutes } from "../modules/project/project.route";
import { OrderRoutes } from "../modules/order/order.route";
import { FounderRoutes } from "../modules/founderProfile/application.route";
import { InvestorRoutes } from "../modules/investorProfile/investor.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/founder",
    route: FounderRoutes,
  },
  {
    path: "/investor",
    route: InvestorRoutes,
  },
  {
    path: "/auth",
    route: AuthRotues,
  },
  {
    path: "/",
    route: FounderRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
