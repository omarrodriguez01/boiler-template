import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const medicalRecordSeeder = async () => {
    const medicalrecord = await prisma.medicalRecord.createMany({
        data: [
            {
                id: 1,
                date: new Date('2022-01-01'),
                diagnosis: 'High blood pressure',
                treatment: 'Prescription medication',
                patientId: 1,
            },
            {
                id: 2,
                date: new Date('2022-02-01'),
                diagnosis: 'Concussion',
                treatment: 'Rest and observation',
                patientId: 2,
              },
              {
                id: 3,
                date: new Date('2022-03-01'),
                diagnosis: 'Breast cancer',
                treatment: 'Chemotherapy',
                patientId: 3,
              },
        ],
    })
    console.log({ medicalrecord });
}