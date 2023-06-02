import { PrismaClient } from '@prisma/client'
import { bookSeeder } from './seeders/BookSeeder'
import { authorSeeder } from './seeders/AuthorSeeder'
import { editorialSeeder } from './seeders/EditorialSeeder'
import { personSeeder } from './seeders/PersonSeeder'
import { genreSeeder } from './seeders/genreSeeder'
import { loanSeeder } from './seeders/loanSeeder'
// import { studentSeeder } from './seeders/studentsSeeder'


const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
    await authorSeeder();
    await genreSeeder();
    await editorialSeeder();
    await bookSeeder();
    await personSeeder();
    await loanSeeder();
    
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