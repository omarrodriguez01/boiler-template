import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedAutores() {
  try {
    const autor1 = await prisma.autor.create({
      data: {
        nombre: 'Marie Lu',
        biografia: 'Bio 1',
      },
    });

    const autor2 = await prisma.autor.create({
      data: {
        nombre: 'Nora Sakavic',
        biografia: 'Bio 2',
      },
    });

    const autor3 = await prisma.autor.create({
      data: {
        nombre: 'James Dashner',
        biografia: 'Bio 3',
      },
    });

    console.log('Seeding of Autores completed successfully.');

  } catch (error) {
    console.error('Error seeding Autores:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedAutores();
