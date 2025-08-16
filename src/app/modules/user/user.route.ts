import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/signup", UserControllers.createUser);

router.get("/:userId", UserControllers.getSingleUser);

export const UserRoutes = router;
