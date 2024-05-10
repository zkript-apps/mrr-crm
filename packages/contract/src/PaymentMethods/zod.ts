import { z } from "zod";
export const Z_PaymentMethodStep = z.object({
  step: z.number(),
  instruction: z.string(),
});

export const Z_PaymentMethod = z.object({
  _id: z.string().optional(),
  campaign: z.string().optional(),
  steps: z.array(Z_PaymentMethodStep),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional().nullable(),
  deletedAt: z.string().optional().nullable(),
});

export const Z_Add_PaymentMethod = z.object({
    campaignId: z.string(),
    steps: z.array(Z_PaymentMethodStep)
  });

  export const Z_Update_PaymentMethod = z.object({
    campaign: z.string().optional(),
    steps: z.array(Z_PaymentMethodStep).optional()
  });
