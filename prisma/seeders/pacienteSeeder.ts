import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const pacienteSeeder = async () => {
  const paciente = await prisma.paciente.createMany({
    data: [
      {
        nombre: 'John',
        apellido: 'Doe',
        fechaNacimiento: new Date('1990-01-01'),
        genero: 'Masculino',
        direccion: '123 Main St',
        telefono: '123-456-7890',
      },
      {
        nombre: 'Alice',
        apellido: 'Smith',
        fechaNacimiento: new Date('1985-05-10'),
        genero: 'Femenino',
        direccion: '456 Elm St',
        telefono: '987-654-3210',
      },
      {
        nombre: 'David',
        apellido: 'Johnson',
        fechaNacimiento: new Date('1978-09-15'),
        genero: 'Masculino',
        direccion: '789 Oak St',
        telefono: '456-789-1230',
      },
      // Add more paciente data as needed
    ],
  });
  console.log({ paciente })
}
