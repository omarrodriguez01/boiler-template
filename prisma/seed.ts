import { PrismaClient } from '@prisma/client'
import { customerSeeder } from './seeders/customersSeeder'
import { employeeSeeder } from './seeders/employeesSeeders'
import { carSeeder } from './seeders/carsSeeder'
import { maintenanceSeeder } from './seeders/maintenancesSeeder'
import { spare_partSeeder } from './seeders/spare_partsSeeder'

const prisma = new PrismaClient()


async function main() {
  await customerSeeder()
  await employeeSeeder()
  await carSeeder()
  await maintenanceSeeder()
  await spare_partSeeder()
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