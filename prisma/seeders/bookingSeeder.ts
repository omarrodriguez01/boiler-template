import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const bookingSeeder = async () => {
    await prisma.booking.createMany({
      data: [
        {
          checkInDate: new Date("2023-05-20"),
          checkOutDate: new Date("2023-05-25"),
          guestId: 1,
          roomNumber: 101
        },
        {
          checkInDate: new Date("2023-06-01"),
          checkOutDate: new Date("2023-06-05"),
          guestId: 2,
          roomNumber: 102
        },
        {
          checkInDate: new Date("2023-06-01"),
          checkOutDate: new Date("2023-06-05"),
          guestId: 3,
          roomNumber: 103
        }
      ]
    });
}