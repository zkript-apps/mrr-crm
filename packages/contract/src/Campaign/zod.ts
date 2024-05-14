import { z } from "zod";

export const Z_Patterns = z.object({
  name: z.string(),
  text: z.string()
})

export const Z_Remarks = z.object({
  comment: z.string(),
  date: z.string()
})

export const Z_Payments = z.object({
  method: z.string(),
  date: z.string(),
  receiptAmount: z.number(),
  repayAmount: z.number(),
  fileName: z.string().optional(),
  remarks: z.string()
})

export const Z_Leads = z.object({
  values: z.object({}),
  payments: z.array(Z_Payments),
  remarks: z.array(Z_Remarks)
})

export const Z_Add_Campaign = z.object({
  title: z.string(),
  description: z.string(),
  leadUniqueKey: z.string(),
  patterns: z.array(Z_Patterns),
  leads: z.array(Z_Leads),
  masterPassword: z.string()
});

export const Z_Update_Campaign = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  leadUniqueKey: z.string(),
  masterPassword: z.string()
});

export const Z_Campaign = z.object({
  _id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  leadUniqueKey: z.string(),
  patterns: z.array(Z_Patterns),
  leads: z.array(Z_Leads),
  payments: z.array(Z_Payments),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional().nullable(),
  deletedAt: z.string().optional().nullable(),
});