import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ordenesItemsSeeder = async () => {
  const ordenItem = await prisma.orden_items.createMany({
    data: [
      {
        orden_id: 1, 
        producto_menu_id: 1, 
        cantidad: 2, 
        precio: 500
      },
      {
        orden_id: 1, 
        producto_menu_id: 3, 
        cantidad: 1, 
        precio: 180
      },
      {
        orden_id: 2, 
        producto_menu_id: 2, 
        cantidad: 2, 
        precio: 600
      },
    ],
  });
  console.log({ ordenItem });
};