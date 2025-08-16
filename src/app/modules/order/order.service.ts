import Order from "./order.model";
import User from "../user/user.model";
import Project from "../project/project.model";
import { TOrder } from "./order.interface";

const createOrder = async (orderData: TOrder) => {
  const { userId, projectId } = orderData;

  // Check if the user exists
  const user = await User.findById(userId);
  if (!user) {
    return "User not found";
  }

  // Check if the project exists
  const project = await Project.findById(projectId);
  if (!project) {
    return "Project not found";
  }

  // Create and return the order
  const order = await Order.create(orderData);
  return order;
};

const getOrders = async () => {
  const result = await Order.find().populate("userId").populate("projectId");
  return result;
};

const getOrderById = async (orderId: number) => {
  const result = await Order.findOne({ orderId })
    .populate("userId")
    .populate("projectId");
  return result;
};

const updateOrder = async (orderId: number, updateData: Partial<TOrder>) => {
  const result = await Order.findOneAndUpdate({ orderId }, updateData, {
    new: true,
  });
  return result;
};

const deleteOrder = async (orderId: number) => {
  const result = await Order.findOneAndDelete({ orderId });
  return result;
};

export const OrderService = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
