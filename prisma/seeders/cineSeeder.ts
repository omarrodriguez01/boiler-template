import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const cineSeeder= async () => {
    const cine = await prisma.cine.createMany({
        data: [
            {
              id: 2,
              nombre: "Cinemex",
              ubicacion:"Av. Humberto Lobo 540-A, Del Valle, 66220 Monterrey, N.L."
            },
            {
              id: 6,
              nombre: "Cinepolis",
              ubicacion:"Av. José Vasconcelos 755, Los Sabinos, 66226 San Pedro Garza García, N.L."
            },
            {
              id: 89,
              nombre: "Epic cinema",
              ubicacion:"Metropolitan Center, Av Lázaro Cárdenas 2400, Valle Oriente, 66269 San Pedro Garza García, N.L."
            },
          ],
      })
  console.log({ cine });
}
