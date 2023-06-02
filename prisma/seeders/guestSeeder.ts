import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const guestSeeder = async () => {
    await prisma.guest.createMany({
      data: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@example.com",
          phoneNumber: "1234567890",
          address: "123 Main St, City"
        },
        {
          firstName: "Jane",
          lastName: "Smith",
          email: "janesmith@example.com",
          phoneNumber: "0987654321",
          address: "456 Elm St, Town"
        },
        {
          firstName: "Bob",
          lastName: "Martin",
          email: "bob@example.com",
          phoneNumber: "999999999",
          address: "456 Saint Av, Monterrey"
        }
      ]
    });
}