import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const prescriptionSeeder = async () => {
  const prescriptions = await prisma.prescription.createMany({
    data: [
      {
        id: 1,
        medicationName: "Lisinopril",
        dosage: "10mg",
        startDate: "2023-05-01T00:00:00.000Z",
        endDate: "2023-05-31T00:00:00.000Z",
        patientId: 1,
        doctorId : 1
      },
      {
        id: 2,
        medicationName: 'Ibuprofen',
        dosage: '400mg',
        startDate: "2023-05-01T00:00:00.000Z",
        endDate: "2023-05-31T00:00:00.000Z",
        patientId: 2,
        doctorId : 2
      },
      {
        id: 3,
        medicationName: 'Paclitaxel',
        dosage: '175mg',
        startDate: "2023-05-01T00:00:00.000Z",
        endDate: "2023-05-31T00:00:00.000Z",
        patientId: 3,
        doctorId : 3
      },
    ],
  })
  console.log({ prescriptions });
}