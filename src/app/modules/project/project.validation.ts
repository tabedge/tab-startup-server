import { z } from "zod";

export const projectValidationSchema = z.object({
  body: z.object({
    category: z.string().min(1, "Category is required"),
    type: z.string().min(1, "Type is required"),
    industry: z.string().min(1, "Industry is required"),
    location: z.string().min(1, "Location is required"),
    netProfit: z.number({ required_error: "Net profit is required" }),
    askingPrice: z.number({ required_error: "Asking price is required" }),
    companyValuation: z.number({
      required_error: "Company valuation is required",
    }),
    presentAssetValue: z.number({
      required_error: "Present asset value is required",
    }),
    requiredFund: z.number({ required_error: "Required fund is required" }),
    shareValue: z.number({ required_error: "Share value is required" }),
  }),
  // files: z.object({
  //   logoImage: z
  //     .any()
  //     .refine(
  //       (file) => file && file.mimetype && file.mimetype.startsWith("image/"),
  //       "Logo image must be a valid image file"
  //     ),
  //   bannerImages: z
  //     .array(
  //       z
  //         .any()
  //         .refine(
  //           (file) =>
  //             file && file.mimetype && file.mimetype.startsWith("image/"),
  //           "Each banner image must be a valid image file"
  //         )
  //     )
  //     .min(1, "At least one banner image is required"),
  // }),
});
