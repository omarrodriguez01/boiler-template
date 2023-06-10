import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const appointmentsSeeder= async () => {
    const appointment = await prisma.appointments.createMany({
        data:[
            {
                doctor_id: 1, // Assuming doctor_id 1 is John Doe
                patient_id: 1, // Assuming patient_id 1 is Alice Johnson
                appointment_date: new Date(2023, 5, 21),
                appointment_time: new Date(2023, 5, 21),
            },
            {
                doctor_id: 2, // Assuming doctor_id 2 is Jane Smith
                patient_id: 2, // Assuming patient_id 2 is Bob Smith
                appointment_date: new Date(2023, 5, 22),
                appointment_time: new Date(2023, 5, 22),
            },
            {
                doctor_id: 3, // Assuming doctor_id 3 is Susane Collins
                patient_id: 3, // Assuming patient_id 3 is Nicole Kidman
                appointment_date: new Date(2023, 5, 23),
                appointment_time: new Date(2023, 5, 23),
            },
        ]
      })
  console.log({ appointment })
}