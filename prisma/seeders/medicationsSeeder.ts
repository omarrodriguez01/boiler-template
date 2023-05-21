import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const medicationsSeeder= async () => {
    const medication = await prisma.medications.createMany({
        data:[
            { medication_name: 'Aspirin', description: 'Pain reliever' },
            { medication_name: 'Amoxicillin', description: 'Antibiotic' },
            { medication_name: 'Ibuprofen', description: 'Nonsteroidal anti-inflammatory'},
        ]
      })
  console.log({ medication })
}