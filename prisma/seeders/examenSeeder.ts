import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const examenSeeder = async () => {
  const examen = await prisma.examen.createMany({
    data: [
      {
        nombre: 'Examen 1',
        descripcion: 'Descripción del examen 1',
      },
      {
        nombre: 'Examen 2',
        descripcion: 'Descripción del examen 2',
      },
      {
        nombre: 'Examen 3',
        descripcion: 'Descripción del examen 3',
      },
    ],
  });
  console.log({ examen })
}


