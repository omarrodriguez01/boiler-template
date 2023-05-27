import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const peliculasSeeder= async () => {
    // Poblar la tabla Peliculas
    const peliculas = await prisma.peliculas.createMany({

      data: [
        {
          id_pelicula: 1,
          titulo: 'Pelicula 1',
          genero: 'Genero 1',
          duracion: 120,
          clasificacion: 'A',
          director: 'Director 1',
          sinopsis: 'Sinopsis de la Película 1',
        },
        {
          id_pelicula: 2,
          titulo: 'Pelicula 2',
          genero: 'Genero 2',
          duracion: 90,
          clasificacion: 'B',
          director: 'Director 2',
          sinopsis: 'Sinopsis de la Película 2',
        },
        {
          id_pelicula: 3,
          titulo: 'Pelicula 3',
          genero: 'Genero 3',
          duracion: 100,
          clasificacion: 'C',
          director: 'Director 3',
          sinopsis: 'Sinopsis de la Película 3',
        },
      ]
    })

    console.log({peliculas})
}