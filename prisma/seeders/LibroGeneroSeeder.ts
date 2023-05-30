import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const LibroGeneroSeeder= async () => {
    const libroGenero1 = await prisma.libroGenero.create({
      data: {
        libroId: 1, // Replace with actual libroId
        generoId: 1, // Replace with actual generoId
      },
    });

    const libroGenero2 = await prisma.libroGenero.create({
      data: {
        libroId: 2, // Replace with actual libroId
        generoId: 2, // Replace with actual generoId
      },
    });

    const libroGenero3 = await prisma.libroGenero.create({
      data: {
        libroId: 3, // Replace with actual libroId
        generoId: 3, // Replace with actual generoId
      },
    });

    console.log('Seeding of LibroGeneros completed successfully.');


}

LibroGeneroSeeder();
