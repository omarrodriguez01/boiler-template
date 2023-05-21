import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const prescriptionsSeeder= async () => {
    const prescription = await prisma.prescriptions.createMany({
        data:[
            {
                doctor_id: 1, // Assuming doctor_id 1 is John Doe
                patient_id: 1, // Assuming patient_id 1 is Alice Johnson
                medication_id: 1, // Assuming medication_id 1 is Aspirin
                dosage: '500mg',
                prescription_date: new Date(2023, 5, 21),
            },
            {
                doctor_id: 2, // Assuming doctor_id 2 is Jane Smith
                patient_id: 2, // Assuming patient_id 2 is Bob Smith
                medication_id: 2, // Assuming medication_id 2 is Amoxicillin
                dosage: '250mg',
                prescription_date: new Date(2023, 5, 22),
            },
            {
                doctor_id: 3, // Assuming doctor_id 3 is Susane Collins
                patient_id: 3, // Assuming patient_id 3 is Nicole Kidman
                medication_id: 3, // Assuming medication_id 3 is Ibuprofen
                dosage: '250mg',
                prescription_date: new Date(2023, 5, 23),
            },
        ]
      })
  console.log({ prescription })
}