import { PrismaClient } from '@prisma/client'
// import { studentSeeder } from './seeders/studentsSeeder'
import { pacienteSeeder } from './seeders/pacienteSeeder'
import { doctorSeeder } from './seeders/doctorSeeder'
import { enfermeraSeeder } from './seeders/enfermeraSeeder'
import { citaSeeder } from './seeders/citaSeeder'
import { historialmedicoSeeder } from './seeders/historialmedicoSeeder'
import { camaSeeder } from './seeders/camaSeeder'
import { admisionpacienteSeeder } from './seeders/admisionpacienteSeeder'
import { equipomedicoSeeder } from './seeders/equipomedicoSeeder'

const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
    await pacienteSeeder();
    await doctorSeeder();
    await enfermeraSeeder();
    await citaSeeder();
    await historialmedicoSeeder();
    await camaSeeder();
    await admisionpacienteSeeder();
    await equipomedicoSeeder();
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