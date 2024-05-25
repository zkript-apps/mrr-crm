import { z } from "zod";
import {
  Z_Campaign,
  Z_Add_Campaign,
  Z_Update_Campaign,
  Z_Leads,
  Z_Payments,
  Z_Remarks,
} from "./zod";

export type T_Campaign = z.infer<typeof Z_Campaign>;
export type T_Add_Campaign = z.infer<typeof Z_Add_Campaign>;
export type T_Update_Campaign = z.infer<typeof Z_Update_Campaign>;
export type T_Update_Lead = z.infer<typeof Z_Leads>;
export type T_Payments = z.infer<typeof Z_Payments>;
export type T_Remarks = z.infer<typeof Z_Remarks>;
