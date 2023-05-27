import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const directorSeeder= async () => {
    const director = await prisma.director.createMany({
        data: [
            {
              id: 6,
              nombre:"Sam Raimi",
              nacionalidad:"estadounidense"


            },
            {
              id: 10,
              nombre:"Peter Ramsey",
              nacionalidad:"estadounidense"
            },
            {
              id: 32,
              nombre:"Sam Raimi",
              nacionalidad:"estadounidense"
            },
          ],
      })
  console.log({ director });
}
