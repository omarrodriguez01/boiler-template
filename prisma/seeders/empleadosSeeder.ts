import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const empleadosSeeder = async () => {
  const empleado = await prisma.empleados.createMany({
    data: [
      {
        nombre: "Jorge", 
        apellidos: "Romero", 
        email: "jorge@hotmail.com", 
        celular: "4495751265", 
        fecha_contratado: new Date("2023-02-14"), 
        puesto: "Intern", 
        salario: 15000, 
      },
      {
        nombre: "Gabriela", 
        apellidos: "Garza", 
        email: "gaby@hotmail.com", 
        celular: "4499578462", 
        fecha_contratado: new Date("2020-12-5"), 
        puesto: "Recepcionista", 
        salario: 30000, 
      }, 
      {
        nombre: "Mariano", 
        apellidos: "López", 
        email: "mariano@hotmail.com", 
        celular: "4498216579", 
        fecha_contratado: new Date("2008-07-11"), 
        puesto: "Cocinero", 
        salario: 30000, 
      }
    ],
  });
  console.log({ empleado });
};