import { PrismaClient } from '@prisma/client'
import { hospitalSeeder } from './seeders/hospitalsSeeder'
import { doctorSeeder } from './seeders/doctorsSeeder'
import { subsidySeeder } from './seeders/subsidiesSeeder'
import { placeSeeder } from './seeders/placesSeeder'
import { companySeeder } from './seeders/companiesSeeder'

const prisma = new PrismaClient()


async function main() {
  // await hospitalSeeder();
  // await doctorSeeder();
  // await subsidySeeder();
  // await placeSeeder();
  await companySeeder();
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