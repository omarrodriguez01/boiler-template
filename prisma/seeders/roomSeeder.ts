import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const roomSeeder = async () => { 
    await prisma.room.createMany({
      data: [
        {
          roomNumber: 101,
          roomType: "Standard",
          occupancyLimit: 2,
          pricePerNight: 100,
          isAvailable: true
        },
        {
          roomNumber: 102,
          roomType: "Deluxe",
          occupancyLimit: 4,
          pricePerNight: 200,
          isAvailable: true
        },
        {
          roomNumber: 103,
          roomType: "Presidential",
          occupancyLimit: 8,
          pricePerNight: 2000,
          isAvailable: true
        }
      ]
    });
}