import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const generosSeeder = async() => {
    const genero = await prisma.generos.createMany({
        data: [{
            genero: 'Accion',
        },
        {
            genero: 'Comedia',
        },
        {
            genero: 'Drama',
        },
        {
            idGenero: 9,
            genero: 'IND',
        },]
    })
    console.log(genero);
}