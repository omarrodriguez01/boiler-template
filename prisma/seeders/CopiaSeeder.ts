import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const CopiaSeeder = async () => {
    const copia = await prisma.copia.createMany({
        data: [
            {
                libro_id: 1,
                estado: 'prestado',
            },
            {
                libro_id: 2,
                estado: 'disponible',
            },
            {
                libro_id: 3,
                estado: 'disponible',
            },
        ]
      })
  console.log({ copia })
}