import { PrismaClient } from '@prisma/client'
// import { studentSeeder } from './seeders/studentsSeeder'
import { cheapNetflixSeeders } from './seeders/cheapNetflixSeeders'


const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
    //await cheapNetflixSeeders();
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