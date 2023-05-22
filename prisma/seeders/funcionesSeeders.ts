import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Poblar la tabla Funciones
    const funciones = [
      {
        id_pelicula: 1,
        id_sala: 1,
        fecha: new Date(),
        hora: '18:00',
      },
      {
        id_pelicula: 2,
        id_sala: 2,
        fecha: new Date(),
        hora: '20:30',
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
