import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const productSeeder = async () => {
  const product1 = await prisma.product.create({
    data: {
      id: 1,
      name_product: 'Oreja',
      price: 7,
      stock: 50,
      categoryId: 1
    },
  })

  const product2 = await prisma.product.create({
    data: {
      id: 2,
      name_product: 'Concha',
      price: 7,
      stock: 15,
      categoryId: 1
    },
  })

  const product3 = await prisma.product.create({
    data: {
      id: 3,
      name_product: 'Bolillo',
      price: 2,
      stock: 30,
      categoryId: 2
    },
  })

  
  console.log({ product1 })
  console.log({ product2 })
  console.log({ product3 })
}
