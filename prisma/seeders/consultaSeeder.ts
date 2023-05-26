import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const consultaSeeder = async () => {
  const consulta = await prisma.consulta.createMany({
    data: [
      {
        doctorId: 1,
        pacienteId: 1,
        fecha: new Date('2023-05-01'),
        hora: '09:00',
      },
      {
        doctorId: 2,
        pacienteId: 2,
        fecha: new Date('2023-05-02'),
        hora: '10:30',
      },
      {
        doctorId: 3,
        pacienteId: 3,
        fecha: new Date('2023-05-03'),
        hora: '11:15',
      },
    ],
  });
  console.log({ consulta })
}


