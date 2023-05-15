import { PrismaClient } from '@prisma/client'
import { prescriptionSeeder } from './seeders/prescriptionSeeder';
import { medicalRecordSeeder } from './seeders/medicalRecordSeeder';
import { patientSeeder } from './seeders/patientSeeder';
import { doctorSeeder } from './seeders/doctorSeeder';
import { appointmnetSeeder } from './seeders/appointmentSeeder';


const prisma = new PrismaClient()


async function main() {
    await patientSeeder();
    await doctorSeeder();
    await appointmnetSeeder();
    await medicalRecordSeeder();
    await prescriptionSeeder();
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