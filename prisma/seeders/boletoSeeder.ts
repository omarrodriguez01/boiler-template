import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
//const date = new Date('1999-01-08 04:05:06');
//const hora = date.getHours();

export const boletoSeeder= async () => {
    const boleto = await prisma.boleto.createMany({
        data: [
            {
              id: 50,
              peliculaId: 1,
              cineId: 2,
              usuarioId: 1000,
              hora: new Date('2050-06-11 04:05:06')
              },
            {
              id: 23,
              peliculaId: 2,
              cineId: 6,
              usuarioId: 37,
              hora: new Date('2023-06-11 06:08:08')
            },
            {
              id: 24,
              peliculaId: 4,
              cineId: 89,
              usuarioId: 1456,
              hora: new Date('2024-06-11 06:06:07')
            },
          ],
      })
  console.log({ boleto });
}
