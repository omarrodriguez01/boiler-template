import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const serviceSeeder = async () => { 
    await prisma.service.createMany({
      data: [
        {
          name: "Room Service",
          price: 20
        },
        {
          name: "Laundry Service",
          price: 15
        },
        {
          name: "Internet",
          price: 50
        }
      ]
    });
}