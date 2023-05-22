import { PrismaClient } from '@prisma/client'
import { guestSeeder } from './seeders/guestSeeder'
import { roomSeeder } from './seeders/roomSeeder'
import { bookingSeeder } from './seeders/bookingSeeder'
import { serviceSeeder } from './seeders/serviceSeeder'
import { paymentSeeder } from './seeders/paymentSeeder'
const prisma = new PrismaClient()


async function main() {
  await guestSeeder();
  await roomSeeder();
  await bookingSeeder();
  await serviceSeeder();
  await paymentSeeder();
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