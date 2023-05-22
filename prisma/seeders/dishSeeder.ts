import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dishSeeder = async () => {
  const dish1 = await prisma.dish.create({
    data: {
      id: "1",
      restaurantId: "1",
      name: "Pepperoni Pizza",
      description: "Delicious deep dish pizza with pepperoni",
      price: 14.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ dish1 });

  const dish2 = await prisma.dish.create({
    data: {
      id: "2",
      restaurantId: "1",
      name: "Cheese Pizza",
      description: "Delicious deep dish pizza with extra cheese",
      price: 16.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ dish2 });

  const dish3 = await prisma.dish.create({
    data: {
      id: "3",
      restaurantId: "1",
      name: "Veggie Pizza",
      description: "Delicious deep dish pizza with fresh vegetables",
      price: 15.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ dish3 });
};
