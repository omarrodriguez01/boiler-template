import { PrismaClient } from '@prisma/client'
// import { studentSeeder } from './seeders/studentsSeeder'


const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
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