import { z } from "zod";
import { Z_Campaign, Z_Add_Campaign, Z_Update_Campaign } from "./zod";

export type T_Campaign = z.infer<typeof Z_Campaign>;
export type T_Add_Campaign = z.infer<typeof Z_Add_Campaign>;
export type T_Update_Campaign = z.infer<typeof Z_Update_Campaign>;
