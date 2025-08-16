import express from "express";
import { InvestorController } from "./investor.controller";

const router = express.Router();

// router.post("/update-investor", InvestorController.createInvestor);
// router.get("/", InvestorController.getInvestors);
// router.get("/:investorId", InvestorController.getInvestorById);
router.patch("/update-investor", InvestorController.updateInvestor);
// router.delete("/:investorId", InvestorController.deleteInvestor);

export const InvestorRoutes = router;
