import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();

// Route to create a new order
router.post("/", OrderController.createOrder);

// Route to get all orders
router.get("/", OrderController.getOrders);

// Route to get a single order by ID
router.get("/:id", OrderController.getOrderById);

// Route to update an order by ID
router.put("/:id", OrderController.updateOrder);

// Route to delete an order by ID
router.delete("/:id", OrderController.deleteOrder);

export const OrderRoutes = router;
