import { PrismaClient } from '@prisma/client'
import { AutorSeeder } from './seeders/AutorSeeder';
import { GeneroSeeder } from './seeders/GeneroSeeder';
import { LibroSeeder } from './seeders/LibroSeeder';
import { MiembrosSeeder } from './seeders/MiembrosSeeder';
import { PrestamosSeeder } from './seeders/PrestamosSeeder';
import { LibroGeneroSeeder } from './seeders/LibroGeneroSeeder';

const prisma = new PrismaClient()


async function main() {
   await AutorSeeder();
   await GeneroSeeder();
   await LibroSeeder();
   await MiembrosSeeder();
   await PrestamosSeeder();
   await LibroGeneroSeeder();
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })