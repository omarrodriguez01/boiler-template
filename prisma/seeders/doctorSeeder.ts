import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const doctorSeeder= async () => {
    const doctor = await prisma.doctor.createMany({
        data: [
            {
                id: 1,
                name: 'Dr. Smith',
                specialty: 'Cardiology',
                phoneNumber: '555-555-4545',
                email: 'drsmith@email.com',
                availability: 'MWF 8am-12pm'
              },
              {
                id: 2,
                name: 'Dr. Johnson',
                specialty: 'Neurology',
                phoneNumber: '555-555-5656',
                email: 'drjohnson@email.com',
                availability: 'TTh 1pm-5pm'
              },
              {
                id: 3,
                name: 'Dr. Lee',
                specialty: 'Oncology',
                phoneNumber: '555-555-6767',
                email: 'drlee@email.com',
                availability: 'MWF 1pm-5pm'
              },
            ],
      })
  console.log({ doctor });
}