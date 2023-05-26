import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const doctorSeeder = async () => {
  const doctor = await prisma.doctor.createMany({
    data: [
      {
        nombre: 'Dr. Juan',
        apellido: 'Pérez',
        especialidad: 'Cardiología',
        telefono: '123-456-7890',
        consultorio: 'A101',
      },
      {
        nombre: 'Dra. María',
        apellido: 'González',
        especialidad: 'Pediatría',
        telefono: '987-654-3210',
        consultorio: 'B202',
      },
      {
        nombre: 'Dr. Michael',
        apellido: 'Smith',
        especialidad: 'Dermatología',
        telefono: '456-789-1230',
        consultorio: 'C303',
      },
      // Add more doctor data as needed
    ],
  });
  console.log({ doctor })
}

