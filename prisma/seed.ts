import { PrismaClient } from '@prisma/client'
import { categoriasSeeder } from './seeders/categoriasSeeder'
import { salasSeeder } from './seeders/salasSeeder';
import { funcionesSeeder } from './seeders/funcionesSeeder';
import { peliculasSeeder } from './seeders/peliculasSeeder';
import { generosSeeder } from './seeders/generosSeeder';
// import { studentSeeder } from './seeders/studentsSeeder'

const prisma = new PrismaClient()

async function main() {
    // await studentSeeder();
    await generosSeeder();
    await peliculasSeeder();
    await categoriasSeeder();
    await salasSeeder();
    await funcionesSeeder();
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