import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const autorSeeder= async () => {
    const autor = await prisma.autor.create({
        data: {
          id: 21,
          nombre: 'Sara J Maas',
        },
      })
  console.log({ autor })

  const autor2 = await prisma.autor.create({
    data: {
      id: 22,
      nombre: 'Kiera Kass',
    },
  })
console.log({ autor })
}