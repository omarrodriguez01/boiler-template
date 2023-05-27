import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const boletosSeeder= async () => {
    // Poblar la tabla Boletos
    const boletos = await prisma.boletos.createMany({

      data: [
        {
          id_boleto: 1,
          id_funcion: 1,
          id_usuario: 1,
          cantidad: 2,
          total: 20.0,
        },
        {
          id_boleto: 2,
          id_funcion: 2,
          id_usuario: 2,
          cantidad: 1,
          total: 10.0,
        },
        {
          id_boleto: 3,
          id_funcion: 3,
          id_usuario: 3,
          cantidad: 3,
          total: 30.0,
        },
      ]
    })

    console.log({boletos})
}
