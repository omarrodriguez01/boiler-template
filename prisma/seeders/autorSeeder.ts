import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const autorSeeder= async () => {
    const autor = await prisma.autor.create({
        data: {
          id: 20,
          nombre: 'JK Rowlling',
        },
      })
  console.log({ autor })
}