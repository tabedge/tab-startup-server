import Founder from "../founderProfile/application.model";
import Investor from "../investorProfile/investor.model";
import { TUser } from "./user.interface";
import User from "./user.model";

const createUserIntoDB = async (userData: TUser) => {
  if (!userData) {
    throw new Error("User Info Not Found!");
  }

  const founder = await Founder.create({});
  userData.founder = founder._id;
  const investor = await Investor.create({});

  userData.investor = investor._id;
  const result = await User.create(userData);

  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const user = await User.findById(userId)
    .populate("founder")
    .populate("investor");
  return user;
};

export const UserServices = {
  createUserIntoDB,
  getSingleUserFromDB,
};
