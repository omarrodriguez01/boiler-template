import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const autorSeeder= async () => {

  const autor3 = await prisma.autor.create({
    data: {
      id: 20,
      nombre: 'JK Rowling',
    },
  })
console.log({ autor3 })

}