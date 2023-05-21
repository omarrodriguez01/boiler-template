import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const patientsSeeder= async () => {
    const patient = await prisma.patients.createMany({
        data:[
            {
                first_name: 'Alice',
                last_name: 'Johnson',
                date_of_birth: new Date(1990, 5, 15),
                gender: 'Female',
                address: '123 Main St',
                phone_number: '1234567890',
            },
            {
                first_name: 'Bob',
                last_name: 'Smith',
                date_of_birth: new Date(1985, 8, 22),
                gender: 'Male',
                address: '456 Elm St',
                phone_number: '9876543210',
            },
            {
                first_name: 'Nicole',
                last_name: 'Kidman',
                date_of_birth: new Date(1967, 6, 20),
                gender: 'Female',
                address: '83 Harris Street',
                phone_number: '5123456789',
            },
        ]
      })
  console.log({ patient })
}