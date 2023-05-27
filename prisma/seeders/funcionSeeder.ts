import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const funcionSeeders= async () => {

  const funcion = await prisma.funcion.createMany({
    data:[
      {
       
        fecha:"2/12/2023",
        hora: "7:30",
        idPelicula: 3,
        salaId: "27c96aea-1aef-4c88-9afd-5c89e6d4604a",
        precio: 85,
        cupo: 400

      },
      {
        fecha:"9/12/2021",
        hora: "8:10",
        idPelicula: 2,
        salaId: "27c96aea-1aef-4c88-9afd-5c89e6d4604a",
        precio: 55,
        cupo: 150
      },
      {
        fecha:"1/07/2023",
        hora: "2:35",
        idPelicula: 5,
        salaId: "27c96aea-1aef-4c88-9afd-5c89e6d4604a",
        precio: 119,
        cupo: 230
      }
    ]
  })
  console.log( funcion)
}
