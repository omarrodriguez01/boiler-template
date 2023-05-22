import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const orderSeeder = async () => {
  for (let i = 1; i <= 3; i++) {
    const order = await prisma.order.create({
      data: {
        id: `${i}`,
        tableId: `${i}`,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    console.log({ order });
  }
};
