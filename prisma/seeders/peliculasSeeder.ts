import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const peliculasSeeder = async() => {
    const pelicula = await prisma.peliculas.createMany({
        data: [{
            titulo: 'Rapidos y Furiosos X',
            idGenero: 1,
        },
        {
            titulo: 'Grown Ups 2',
            idGenero: 2,
        },
        {
            titulo: 'The Whale',
            idGenero: 3,
        },]
    })
    console.log(pelicula);
}