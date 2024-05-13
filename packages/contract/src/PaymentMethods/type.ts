import { z } from "zod";
import { Z_PaymentMethod, Z_Add_PaymentMethod, Z_Update_PaymentMethod} from "./zod";

export type T_Paymethod = z.infer<typeof Z_PaymentMethod>;
export type T_Add_PaymentMethod = z.infer<typeof Z_Add_PaymentMethod>;
export type T_Update_PaymentMethod = z.infer<typeof Z_Update_PaymentMethod>;
