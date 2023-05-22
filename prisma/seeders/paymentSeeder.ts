import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const paymentSeeder = async () => {
  const payment1 = await prisma.payment.create({
    data: {
      id: "1",
      orderId: "1",
      amount: 14.99, // Pepperoni Pizza
      paymentMethod: "Credit Card",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ payment1 });

  const payment2 = await prisma.payment.create({
    data: {
      id: "2",
      orderId: "2",
      amount: 16.99, // Cheese Pizza
      paymentMethod: "Cash",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ payment2 });

  const payment3 = await prisma.payment.create({
    data: {
      id: "3",
      orderId: "3",
      amount: 15.99, // Veggie Pizza
      paymentMethod: "Debit Card",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log({ payment3 });
};
