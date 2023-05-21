// to truncate all the data of the database run npx ts-node truncate.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function truncateData() {
  try {
    await prisma.cancion.deleteMany();
    await prisma.album.deleteMany();
    await prisma.artista.deleteMany();
    await prisma.listaReproduccion.deleteMany();
    await prisma.usuario.deleteMany();
    await prisma.usuarioArtistaSeguido.deleteMany();
    await prisma.cancionSeleccionada.deleteMany();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

truncateData();
