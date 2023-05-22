import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const restaurantSeeder = async () => {
  const restaurant = await prisma.restaurant.create({
    data: {
      id: "1",
      name: "Deep Dish Pizzeria",
      latitude: 41.8781,
      longitude: -87.6298,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ restaurant });
};
