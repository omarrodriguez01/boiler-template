import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Poblar la tabla Salas
    const salas = [
      {
        nombre: 'Sala 1',
        capacidad: 100,
      },
      {
        nombre: 'Sala 2',
        capacidad: 80,
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