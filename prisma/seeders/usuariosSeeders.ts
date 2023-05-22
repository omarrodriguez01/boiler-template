import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Poblar la tabla Usuarios
    const usuarios = [
      {
        nombre: 'Usuario 1',
        apellido: 'Apellido 1',
        correo: 'usuario1@example.com',
        contrasena: 'contrasena1',
        tarjeta_credito: '1111-2222-3333-4444',
      },
      {
        nombre: 'Usuario 2',
        apellido: 'Apellido 2',
        correo: 'usuario2@example.com',
        contrasena: 'contrasena2',
        tarjeta_credito: '5555-6666-7777-8888',
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
