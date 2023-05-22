import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Poblar la tabla Películas
    const peliculas = [
      {
        titulo: 'Pelicula 1',
        genero: 'Genero 1',
        duracion: 120,
        clasificacion: 'A',
        director: 'Director 1',
        sinopsis: 'Sinopsis de la Película 1',
      },
      {
        titulo: 'Pelicula 2',
        genero: 'Genero 2',
        duracion: 90,
        clasificacion: 'B',
        director: 'Director 2',
        sinopsis: 'Sinopsis de la Película 2',
      },
    ];

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error while seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();