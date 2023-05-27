import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const funcionesSeeder= async () => {
    // Poblar la tabla Funciones
    const funciones = await prisma.funciones.createMany({

      data: [
        {
          id_funcion: 1,
          id_pelicula: 1,
          id_sala: 1,
          fecha: new Date(),
          hora: new Date('May 26, 2023 07:30:00'),
        },
        {
          id_funcion: 2,
          id_pelicula: 2,
          id_sala: 2,
          fecha: new Date(),
          hora: new Date('May 26, 2023 08:30:00'),
        },
        {
          id_funcion: 3,
          id_pelicula: 3,
          id_sala: 3,
          fecha: new Date(),
          hora: new Date('May 26, 2023 09:30:00'),
        },
      ]
    })

    console.log({funciones})
}