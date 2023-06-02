import { PrismaClient } from '@prisma/client'
// import { studentSeeder } from './seeders/studentsSeeder'
import { autorSeeder } from './seeders/autorSeeder'
import { librosSeeder } from './seeders/librosSeeder'
import { existenciaSeeder } from './seeders/existenciaSeeder'

const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
    await autorSeeder();
    await librosSeeder();
    await existenciaSeeder();
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