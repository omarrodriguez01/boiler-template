import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const salasSeeder= async () => {
    // Poblar la tabla Salas
    const salas = await prisma.salas.createMany({

      data: [
        {
          id_sala: 1,
          nombre: 'Sala 1',
          capacidad: 100,
        },
        {
          id_sala: 2,
          nombre: 'Sala 2',
          capacidad: 80
        },
        {
          id_sala: 3,
          nombre: 'Sala 3',
          capacidad: 90
        },
      ]
    })

    console.log({salas})
}
