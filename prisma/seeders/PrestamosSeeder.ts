import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedPrestamos() {
  try {
    const prestamo1 = await prisma.prestamos.create({
      data: {
        miembroId: 1, // Replace with actual miembroId
        libroId: 1, // Replace with actual libroId
        fechaPrestamo: new Date(),
        fechaDevolucion: new Date(),
      },
    });

    const prestamo2 = await prisma.prestamos.create({
      data: {
        miembroId: 2, // Replace with actual miembroId
        libroId: 2, // Replace with actual libroId
        fechaPrestamo: new Date(),
        fechaDevolucion: new Date(),
      },
    });

    const prestamo3 = await prisma.prestamos.create({
      data: {
        miembroId: 3, // Replace with actual miembroId
        libroId: 3, // Replace with actual libroId
        fechaPrestamo: new Date(),
        fechaDevolucion: new Date(),
      },
    });

    console.log('Seeding of Prestamos completed successfully.');

  } catch (error) {
    console.error('Error seeding Prestamos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedPrestamos();
