import { db } from "~/utils/db.server";

export const getProducts = async () => {
  return await db.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      stock: true,
      category: true,
    },
  })
}