import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const categorySeeder= async () => {

const categoria1 = await prisma.category.create({
    data: {
      id: 1,
      name: 'Pan Dulce',
      bakeryId: 3,
    },
  })

  const categoria2 = await prisma.category.create({
    data: {
      id: 2,
      name: 'Pan Blanco',
      bakeryId: 3,
    },
  })

  const categoria3 = await prisma.category.create({
    data: {
      id: 3,
      name: 'Bizcochería',
      bakeryId: 3,
    },
  })

  console.log({ categoria1 })
  console.log({ categoria2 })
  console.log({ categoria3 })

}
