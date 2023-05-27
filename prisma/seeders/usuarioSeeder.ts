import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const usuarioSeeder= async () => {
    const usuario = await prisma.usuario.createMany({
        data: [
            {
              id: 37,
              nombre:"Ian",
              apellido:"Odria"


            },
            {
              id: 1000,
              nombre:"Humberto",
              apellido:"Rodriguez"
            },
            {
              id: 1456,
              nombre:"Diego",
              apellido:"Chuc"
            },
          ],
      })
  console.log({ usuario });
}
