import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  jwt_access_screet: process.env.JWT_ACCESS_SCREET,
  jwt_access_expires_in: process.env.EXPIREDIN,
  node_env: process.env.NODE_ENV,
};
