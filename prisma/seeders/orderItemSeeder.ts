import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const orderItemSeeder = async () => {
  const orderItem1 = await prisma.orderItem.create({
    data: {
      id: "1",
      orderId: "1",
      dishId: "1",
      specialInstructions: "Extra pepperoni, please.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ orderItem1 });

  const orderItem2 = await prisma.orderItem.create({
    data: {
      id: "2",
      orderId: "2",
      dishId: "2",
      specialInstructions: "Crust should be extra crispy.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ orderItem2 });

  const orderItem3 = await prisma.orderItem.create({
    data: {
      id: "3",
      orderId: "3",
      dishId: "3",
      specialInstructions: "Extra veggies and less cheese.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ orderItem3 });
};
