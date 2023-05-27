import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const placeSeeder = async () => {
    const place = await prisma.place.createMany({
        data: [
            {
                hospitalId: "0c3b39f0-5c79-47e8-91cf-cfa08f1d22d2",
                subsidyId: "9d2d5e01-32bb-4326-bf0a-a062d3a6c150"
            },
            {
                hospitalId: "3c05f9f7-1819-454b-abcd-61b1df4b1028",
                subsidyId: "58b32464-9acc-4080-9f3b-f4f123af7281"
            },
            {
                hospitalId: "8dd2b174-2a76-46e5-b139-aea5b2adc89e",
                subsidyId: "0dd68b59-537e-4ad0-9851-5b85906bb325"
            },
        ]
    })
    console.log(place)
}
