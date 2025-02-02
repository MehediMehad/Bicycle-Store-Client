import { z } from "zod";

export const addProductValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.enum([
    "Giant",
    "Trek",
    "Specialized",
    "Cannondale",
    "Scott",
    "Bianchi",
    "Merida",
    "Duranta",
    "Veloce",
    "Prince",
    "Phoenix",
    "Hero",
    "Atlas",
    "Avon",
  ]),
  price: z.number().min(0, "Price must be a positive number"),
  quantity: z.number().int().min(0, "Quantity must be a non-negative integer"),
  type: z.enum(["Mountain", "Road", "Hybrid", "BMX", "Electric"]),
  color: z.enum(["Red", "Blue", "Black", "White", "Green", "Yellow", "Gray"]),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Image must be a valid URL").optional(),
  inStock: z.boolean().optional(),
});
