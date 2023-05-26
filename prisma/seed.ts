import { PrismaClient } from '@prisma/client'
 import { cinemaSeeder } from './seeders/cinemaSeeder'


const prisma = new PrismaClient()


async function main() {
     await cinemaSeeder();
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