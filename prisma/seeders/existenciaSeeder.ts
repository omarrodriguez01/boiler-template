import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const existenciaSeeder= async () => {
    const existencia = await prisma.existencia.create({
        data: {
          id: 2,
          libro_id: 5,
          ubicacion: 'G-I 6',
        },
      })
  console.log({ existencia })
}