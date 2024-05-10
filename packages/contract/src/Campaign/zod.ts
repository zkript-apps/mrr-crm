import { z } from "zod";

export const Z_Campaign = z.object({
  _id: z.string().optional(),
  title: z.string(),
  description:z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional().nullable(),
  deletedAt:z.string().optional().nullable(),

});

export const Z_Add_Campaign = z.object({
    title: z.string(),
    description:z.string()
  });

  export const Z_Update_Campaign = z.object({
    title: z.string().optional(),
    description:z.string().optional()
  });