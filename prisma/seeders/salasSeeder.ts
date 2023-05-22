import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const salasSeeder = async() => {
    const sala = await prisma.salas.createMany({
        data: [{
            idCategoria: 1,
            numSala: 5,
            capacidad: 30
        },
        {
            idCategoria: 2,
            numSala: 6,
            capacidad: 90
        },
        {
            idCategoria: 3,
            numSala: 7,
            capacidad: 70
        },]
    })
    console.log(sala);
}