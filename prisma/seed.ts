import { PrismaClient } from '@prisma/client'
// import { studentSeeder } from './seeders/studentsSeeder'
import { albumSeeder } from './seeders/albumsSeeder'
import { artistSeeder } from './seeders/artistsSeeder'
import { playlistSeeder } from './seeders/playlistsSeeder'
import { songSeeder } from './seeders/songsSeeder'
import { playlistSongSeeder } from './seeders/playlistSongSeeder'
import { subscriptionSeeder } from './seeders/subscriptionsSeeder'
import { userSeeder } from './seeders/usersSeeder'

const prisma = new PrismaClient()


async function main() {
    await artistSeeder();
    await albumSeeder();
    await songSeeder();
    await subscriptionSeeder();
    await userSeeder();
    await playlistSeeder();
    await playlistSongSeeder();
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