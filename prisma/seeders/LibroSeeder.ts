import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function LibroSeeder() {
  try {
    const libro1 = await prisma.libro.create({
      data: {
        titulo: 'The Foxhole Court',
        autor: 'Nora Sakavic',
        fechaPublicacion: 2013,
        disponible: true,
      },
    });

    const libro2 = await prisma.libro.create({
      data: {
        titulo: 'The Eye of Minds',
        autor: 'James Dashner',
        fechaPublicacion: 2008,
        disponible: false,
      },
    });

    const libro3 = await prisma.libro.create({
      data: {
        titulo: 'Legend',
        autor: 'Marie Lu',
        fechaPublicacion: 2011,
        disponible: true,
      },
    });

    console.log('Seeding of Libros completed successfully.');

  } catch (error) {
    console.error('Error seeding Libros:', error);
  } finally {
    await prisma.$disconnect();
  }
}

LibroSeeder();
