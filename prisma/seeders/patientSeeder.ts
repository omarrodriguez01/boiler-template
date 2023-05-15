import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const patientSeeder= async () => {
    const patient = await prisma.patient.createMany({
        data: [
            {
                id: 1,
                name: 'John Doe',
                dateOfBirth: new Date('1980-01-01'),
                gender: 'Male',
                address: '123 Main St',
                phoneNumber: '555-555-1212',
                email: 'johndoe@email.com',
                insuranceInfo: 'Blue Cross Blue Shield',
                emergencyContact: 'Jane Doe'
              },
              {
                id: 2,
                name: 'Jane Smith',
                dateOfBirth: new Date('1990-02-02'),
                gender: 'Female',
                address: '456 Oak Ave',
                phoneNumber: '555-555-2323',
                email: 'janesmith@email.com',
                insuranceInfo: 'Aetna',
                emergencyContact: 'John Smith'
              },
              {
                id: 3,
                name: 'Bob Johnson',
                dateOfBirth: new Date('1975-03-03'),
                gender: 'Male',
                address: '789 Elm St',
                phoneNumber: '555-555-3434',
                email: 'bobjohnson@email.com',
                insuranceInfo: 'Cigna',
                emergencyContact: 'Sue Johnson'
              },
            ],
      })
  console.log({ patient })
}