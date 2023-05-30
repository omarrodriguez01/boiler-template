import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const MiembrosSeeder= async () => {
    const miembro1 = await prisma.miembros.create({
      data: {
        nombre: 'Member 1',
        direccion: 'Address 1',
        telefono: '123456789',
        correo: 'member1@example.com',
        estatusMembresia: 'Active',
      },
    });

    const miembro2 = await prisma.miembros.create({
      data: {
        nombre: 'Member 2',
        direccion: 'Address 2',
        telefono: '987654321',
        correo: 'member2@example.com',
        estatusMembresia: 'Active',
      },
    });

    const miembro3 = await prisma.miembros.create({
      data: {
        nombre: 'Member 3',
        direccion: 'Address 3',
        telefono: '567890123',
        correo: 'member3@example.com',
        estatusMembresia: 'Inactive',
      },
    });

    console.log('Seeding of Miembros completed successfully.');

}

MiembrosSeeder();
