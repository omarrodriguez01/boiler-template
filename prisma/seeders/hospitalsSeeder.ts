import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const hospitalSeeder = async () => {
    const hospital = await prisma.hospital.createMany({
        data: [
            {
                alias: "Centro Medico",
                bedsCapacity: 900,
                peopleCapacity: 1500,
            },
            {
                alias: "Medicina Segura Similar",
                bedsCapacity: 15,
                peopleCapacity: 50,
            },
            {
                alias: "Seguro Popular",
                bedsCapacity: 200,
                peopleCapacity: 500,
            },
        ]
    })
    console.log(hospital)
    //console.log({ student })
}
