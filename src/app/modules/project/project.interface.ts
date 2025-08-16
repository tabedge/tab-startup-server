import { Types } from "mongoose";

export interface IProject {
  author: Types.ObjectId;
  projectId: number;
  title: string;
  category: string;
  type: string;
  industry: string;
  location: string;
  netProfit: number;
  askingPrice: number;
  siteAge: number;
  companyValuation: number;
  presentAssetValue: number;
  requiredFund: number;
  shareValue: number;
  logoImage: string;
  bannerImages: string[];
}

export interface FilterParams {
  category?: string;
  search?: string;
}
