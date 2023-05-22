import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const tableSeeder = async () => {
  for (let i = 1; i <= 3; i++) {
    const table = await prisma.table.create({
      data: {
        id: `${i}`,
        number: i,
        restaurantId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    console.log({ table });
  }
};
