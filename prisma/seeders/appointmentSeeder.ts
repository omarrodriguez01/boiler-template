import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const appointmnetSeeder= async () => {
    const appointment = await prisma.appointment.createMany({
        data: [
            {
                id: 1,
                date: new Date('2023-05-15T09:00:00'),
                reason: 'Checkup',
                notes: 'Patient has a history of high blood pressure',
                patientId: 1,
                doctorId: 1
              },
              {
                id: 2,
                date: new Date('2023-05-16T10:30:00'),
                reason: 'Follow-up',
                notes: 'Patient\'s condition has improved',
                patientId: 2,
                doctorId: 2
              },
              {
                id: 3,
                date: new Date('2023-05-17T11:15:00'),
                reason: 'Consultation',
                notes: 'Patient needs surgery',
                patientId: 3,
                doctorId: 3
              },
            ],
      })
  console.log({ appointment });
}