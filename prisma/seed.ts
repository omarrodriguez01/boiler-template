import { PrismaClient } from '@prisma/client'
import { cineSeeder } from './seeders/cineSeeder'
import { boletoSeeder } from './seeders/boletoSeeder'
import { directorSeeder } from './seeders/directorSeeder'
import { peliculaSeeder } from './seeders/peliculaSeeder'
import { usuarioSeeder } from './seeders/usuarioSeeder'
// import { studentSeeder } from './seeders/studentsSeeder'


const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
    await directorSeeder();
    await cineSeeder();
    await usuarioSeeder();
    await peliculaSeeder();
    await boletoSeeder();
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