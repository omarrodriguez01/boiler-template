import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const doctorSeeder = async () => {
  const doctor = await prisma.doctor.createMany({
    data: [
      {
        name: "Macias",
        speciality: "Cirujano",
        placeId: "3c05f9f7-1819-454b-abcd-61b1df4b1028"
      },
      {
        name: "Vic",
        speciality: "Dermatologa",
        placeId: "0c3b39f0-5c79-47e8-91cf-cfa08f1d22d2"
      },
      {
        name: "Leo",
        speciality: "Pediatra",
        placeId: "8dd2b174-2a76-46e5-b139-aea5b2adc89e"
      },
    ]
  })
  console.log(doctor)
}
