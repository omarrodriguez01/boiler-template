import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const orderSeeder= async () => {
  const order1 = await prisma.order.create({
    data: {
      id: 1,
      saleDate: new Date("2023-5-17"),
      content: "1 Concha, 2 Bolillos",
      total: 11,
      employeeId: 1
    },
  })

  const order2 = await prisma.order.create({
    data: {
      id: 2,
      saleDate: new Date("2023-5-18"),
      content: "5 Orejas, 1 Concha",
      total: 42,
      employeeId: 1
    },
  })

  const order3 = await prisma.order.create({
    data: {
      id: 3,
      saleDate: new Date("2023-5-19"),
      content: "30 Bolillos",
      total: 60,
      employeeId: 1
    },
  })

  console.log({ order1 })
  console.log({ order2 })
  console.log({ order3 })
}
