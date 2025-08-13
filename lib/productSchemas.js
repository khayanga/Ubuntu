import * as z from "zod";

export const atmFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  quantity: z.string().min(1, { message: "Please specify quantity" }),
  installationLocation: z
    .string()
    .min(1, { message: "Please enter installation location" }),
});

export const meterFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  quantity: z.string().min(1, { message: "Please specify quantity" }),
});

export const technologyMap = {
  "nb-iot": "nbiot",
  "4g-cat-1": "cat1",
  "lorawan": "lorawan",
};