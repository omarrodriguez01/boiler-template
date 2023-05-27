import { PrismaClient } from '@prisma/client'
import { hospitalSeeder } from './seeders/hospitalsSeeder'
import { doctorSeeder } from './seeders/doctorsSeeder'
import { subsidySeeder } from './seeders/subsidiesSeeder'
import { placeSeeder } from './seeders/placesSeeder'
import { companySeeder } from './seeders/companiesSeeder'

const prisma = new PrismaClient()


async function main() {
  //ADVERTENCIA: Correr en orden e ir llegando la foreign key correspondiente
  // await hospitalSeeder();
  // await subsidySeeder();
  // await companySeeder();
  // await doctorSeeder();            
  // await placeSeeder();
  
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