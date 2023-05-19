import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const librosSeeder= async () => {
    const libro = await prisma.libro.create({
        data: {
          id: 5,
          titulo: 'Harry Potter y la piedra filosofal',
          autor_id: 20,
          stock: 15,
        },
      })
  console.log({ libro })
}