import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const paymentSeeder = async () => {
    await prisma.payment.createMany({
      data: [
        {
          paymentDate: new Date("2023-05-25"),
          totalAmount: 500,
          bookingId: 1
        },
        {
          paymentDate: new Date("2023-06-05"),
          totalAmount: 800,
          bookingId: 2
        },
        {
          paymentDate: new Date("2023-06-05"),
          totalAmount: 2000,
          bookingId: 3
        }
      ]
    });
}
