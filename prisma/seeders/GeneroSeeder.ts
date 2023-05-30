import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GeneroSeeder= async () => {
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

}

GeneroSeeder();
