import dotenv from "dotenv";
import path from "path";

// Decide file based on NODE_ENV
const isProd = process.env.NODE_ENV === "production";
export const envFile = isProd ? ".env.production" : ".env.local";

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

interface EnvConfig {
  PORT: string;
  DB_URL: string;
  NODE_ENV: "development" | "production";
  EXPRESS_SESSION_SECRET: string;
  JWT: {
    JWT_ACCESS_SECRET: string;
    JWT_ACCESS_EXPIRES: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES: string;
    BCRYPT_SALT_ROUND: number;
  };
}

// Helper to fetch env vars
const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const loadEnvVariables = (): EnvConfig => ({
  PORT: getEnv("PORT"),
  DB_URL: getEnv("DB_URL"),
  NODE_ENV: getEnv("NODE_ENV") as "development" | "production",
  EXPRESS_SESSION_SECRET: getEnv("EXPRESS_SESSION_SECRET"),
  JWT: {
    JWT_ACCESS_SECRET: getEnv("JWT_ACCESS_SECRET"),
    JWT_ACCESS_EXPIRES: getEnv("JWT_ACCESS_EXPIRES"),
    JWT_REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
    JWT_REFRESH_EXPIRES: getEnv("JWT_REFRESH_EXPIRES"),
    BCRYPT_SALT_ROUND: Number(getEnv("BCRYPT_SALT_ROUND")),
  },
});

const envVars = loadEnvVariables();
export default envVars;
