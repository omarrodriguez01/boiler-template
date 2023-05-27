import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const funcionesSeeder = async() => {
    const funcion = await prisma.funciones.createMany({
        data: [{
            idPelicula: 1,
            horario: new Date("2023-11-29 12:00:00"),
            idSala: 1,
        },
        {
            idPelicula: 2,
            horario: new Date("2023-11-29 12:00:00"),
            idSala: 2,
        },
        {
            idPelicula: 2,
            horario: new Date("2023-11-29 12:00:00"),
            idSala: 2,
        },]
    })
    console.log(funcion);
}