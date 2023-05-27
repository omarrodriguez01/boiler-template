import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const companySeeder = async () => {
    const company = await prisma.company.createMany({
        data: [
            {
                name: "Empresa Fantasma S.A de C.V",
                status: false,
                subsidyId: "afbe74bc-4f4f-4868-bcf5-7eeaabc26afe"
            },
            {
                name: "Life for Everybody",
                status: true,
                subsidyId: "afbe74bc-4f4f-4868-bcf5-7eeaabc26afe"
            },
            {
                name: "Faiser",
                status: true,
                subsidyId: "afbe74bc-4f4f-4868-bcf5-7eeaabc26afe"
            },
        ]
    })
    console.log(company)
}
