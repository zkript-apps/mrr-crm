import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 9000;
export const API_URL = process.env.API_URL || "";
export const ALLOWED_CLIENTS = process.env.ALLOWED_CLIENTS?.split(
  ",",
) as unknown as string;
export const MONGO_URL = process.env.MONGO_URL as unknown as string;
export const WEB_URL = process.env.WEB_URL || "";
export const SIGN_KEY = process.env.SIGN_KEY || "";
export const MASTER_PASSWORD = "qwerty123";
