import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const pacienteSeeder = async () => {
  const paciente = await prisma.paciente.createMany({
    data: [
      {
        nombre: "Andres",
        fecha_nacimiento: new Date('2002-04-23'),
        genero: "Hombre",
        telefono: "8120329739",
        correo_electronico: "andres.fuentes@afared.com",
        direccion: "Privada Sereno 204",
      },
      {
        nombre: "Laura",
        fecha_nacimiento: new Date('1995-09-12'),
        genero: "Mujer",
        telefono: "8214578632",
        correo_electronico: "laura.gomez@correo.com",
        direccion: "Calle del Sol 123",
      },
      {
        nombre: "Carlos",
        fecha_nacimiento: new Date('1988-12-05'),
        genero: "Hombre",
        telefono: "8195036247",
        correo_electronico: "carlos.perez@correo.com",
        direccion: "Avenida Principal 789",
      },
    ],
  });
  console.log({ paciente });
};
