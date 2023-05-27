import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const subsidySeeder = async () => {
    const subsidy = await prisma.subsidy.createMany({
        data: [
            {
                type: "Medicinas",
                origin: "EUA",
            },
            {
                type: "Dinero",
                origin: "Espania",
            },
            {
                type: "Vacunas",
                origin: "Francia",
            },
        ]
    })
    console.log(subsidy)
}
