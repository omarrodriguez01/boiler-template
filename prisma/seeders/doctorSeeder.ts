import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const doctorSeeder = async () => {
  const doctor = await prisma.doctor.createMany({
    data: [
      {
        nombre: "Rodrigo",
        especialidad: "Homeopatia",
        telefono: "8120329739",
        correo_electronico: "rodrigo@correo.com",
      },
      {
        nombre: "María",
        especialidad: "Pediatría",
        telefono: "8214578632",
        correo_electronico: "maria.lopez@correo.com",
      },
      {
        nombre: "Juan",
        especialidad: "Dermatología",
        telefono: "8195036247",
        correo_electronico: "juan.gonzalez@correo.com",
      },
    ],
  });
  console.log({ doctor });
};
