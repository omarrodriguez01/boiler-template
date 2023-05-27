import { PrismaClient } from '@prisma/client'
// import { studentSeeder } from './seeders/studentsSeeder'
import { peliculasSeeders } from './seeders/peliculasSeeder'
import { salasSeeders } from './seeders/salasSeeders';
import { funcionSeeders } from './seeders/funcionSeeder';
import { boletasSeeders } from './seeders/boletasSeeder';

const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
    // await peliculasSeeders();
    // await salasSeeders();
    // await boletasSeeders();
    await funcionSeeders();
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