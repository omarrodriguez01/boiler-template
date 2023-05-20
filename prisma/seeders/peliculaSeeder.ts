import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const peliculaSeeder= async () => {
    const pelicula = await prisma.pelicula.createMany({
        data: [
            {
                id: 1,
                titulo: "Spiderman",
                genero: "Terror",
                Fecha: 2002,
                directorId: 6


              },
              {
                id: 2,
                titulo: "Spider-Man: un nuevo universo (Spider-Man: Into the Spider-Verse)",
                genero: "Comedia",
                Fecha: 2018 ,
                directorId: 10
              },
              {
                id: 4,
                titulo: "El Hombre Araña 3",
                genero: "Suspenso",
                Fecha: 2007 ,
                directorId: 32
              },
            ],
      })
  console.log({ pelicula });
}
