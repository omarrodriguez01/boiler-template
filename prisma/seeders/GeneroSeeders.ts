import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedGeneros() {
  try {
    const genero1 = await prisma.genero.create({
      data: {
        nombre: 'Fiction',
      },
    });

    const genero2 = await prisma.genero.create({
      data: {
        nombre: 'Dystopian',
      },
    });

    const genero3 = await prisma.genero.create({
      data: {
        nombre: 'Science Fiction',
      },
    });

    console.log('Seeding of Generos completed successfully.');

  } catch (error) {
    console.error('Error seeding Generos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedGeneros();
