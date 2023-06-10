import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const doctorsSeeder= async () => {
    const doctor = await prisma.doctors.createMany({
        data:[
            {
                first_name: 'John',
                last_name: 'Doe',
                department_id: 1, // Assuming department_id 1 is Cardiology
            },
            {
                first_name: 'Jane',
                last_name: 'Smith',
                department_id: 2, // Assuming department_id 2 is Dermatology
            },
            {
                first_name: 'Susane',
                last_name: 'Collins',
                department_id: 3, // Assuming department_id 2 is Neurology
            },
        ]
      })
  console.log({ doctor })
}