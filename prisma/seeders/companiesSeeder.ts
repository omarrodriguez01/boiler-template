import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const companySeeder = async () => {
    const company = await prisma.company.createMany({
        data: [
            {
                name: "Empresa Fantasma S.A de C.V",
                status: false,
                subsidyId: "9d2d5e01-32bb-4326-bf0a-a062d3a6c150"
            },
            {
                name: "Life for Everybody",
                status: true,
                subsidyId: "58b32464-9acc-4080-9f3b-f4f123af7281"
            },
            {
                name: "Faiser",
                status: true,
                subsidyId: "0dd68b59-537e-4ad0-9851-5b85906bb325"
            },
        ]
    })
    console.log(company)
}
