/* eslint-disable @typescript-eslint/no-explicit-any */
import { v2 as cloudinary } from 'cloudinary';
import envVars from './env';
import AppError from '../errorHelpers/AppError';

cloudinary.config({
  cloud_name: envVars.CLOUDINARY.CLOUDINARY_NAME,
  api_key: envVars.CLOUDINARY.CLOUDINARY_API_KEY,
  api_secret: envVars.CLOUDINARY.CLOUDINARY_API_SECRET,
  //   secure_distribution: "mydomain.com",
  //   upload_prefix: "https://api-eu.cloudinary.com",
});

export const deleteImageFromCLoudinary = async (url: string) => {
  try {
    const regex = /\/v\d+\/(.*?)\.(jpg|jpeg|png|gif|webp)$/i;

    const match = url.match(regex);

    // console.log({ match });

    if (match && match[1]) {
      const public_id = match[1];
      await cloudinary.uploader.destroy(public_id);
      // console.log(`File ${public_id} is deleted from cloudinary`);
    }
  } catch (error: any) {
    throw new AppError(401, 'Cloudinary image deletion failed', error.message);
  }
};

export const cloudinaryUploads = cloudinary;
