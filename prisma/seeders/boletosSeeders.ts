import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Poblar la tabla Boletos
    const boletos = [
      {
        id_funcion: 1,
        id_usuario: 1,
        cantidad: 2,
        total: 20.0,
      },
      {
        id_funcion: 2,
        id_usuario: 2,
        cantidad: 1,
        total: 10.0,
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
