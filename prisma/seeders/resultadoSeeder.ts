import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resultadoSeeder = async () => {
  
  
    const resultado = await prisma.resultado.createMany({
      data: [
        {
          consultaId: 1,
          examenId: 1,
          valor: 10.5,
          unidad: 'mg/dL',
        },
        {
          consultaId: 1,
          examenId: 1,
          valor: 8.2,
          unidad: 'ng/mL',
        },
        {
          consultaId: 1,
          examenId: 1,
          valor: 25.1,
          unidad: 'pg/mL',
        },
      ],
    });
    console.log({ resultado })
  }

