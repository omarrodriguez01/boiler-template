import { PrismaClient } from '@prisma/client'
import { usersSeeder } from './seeders/usersSeeder';
import { forumSeeder } from './seeders/forumSeeder';
import { moviesSeeder } from './seeders/moviesSeeder';
import { playlistSeeder } from './seeders/playlistSeeder';
import { reviewsSeeder } from './seeders/reviewSeeder';


const prisma = new PrismaClient()


async function main() {
    await usersSeeder();
    await moviesSeeder();
    await forumSeeder();
    await playlistSeeder();
    await reviewsSeeder();
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