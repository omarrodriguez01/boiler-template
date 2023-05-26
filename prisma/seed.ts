import { PrismaClient } from '@prisma/client'
// import { studentSeeder } from './seeders/studentsSeeder'
import { pacienteSeeder } from './seeders/pacienteSeeder';
import { doctorSeeder } from './seeders/doctorSeeder';
import { consultaSeeder } from './seeders/consultaSeeder';
import { examenSeeder } from './seeders/examenSeeder'
import { resultadoSeeder } from './seeders/resultadoSeeder';




const prisma = new PrismaClient()


async function main() {
  await pacienteSeeder();
  await doctorSeeder();
  await consultaSeeder();
  await examenSeeder();
  await resultadoSeeder();  
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