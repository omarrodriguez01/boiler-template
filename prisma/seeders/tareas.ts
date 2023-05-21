
import { PrismaClient, Tareas } from "@prisma/client";

const prisma = new PrismaClient();

export const tareasSeeder = async () => {
  const tareas = await prisma.tareas.createMany({
    data: [
        {
            ID: 1,
            Nombre: "Tarea1",
            Descripcion: "Descripcion1",
            FechaLimite: '1999-01-08 04:05:06',
            InvolucradoFK: 1,
            ClienteFK: 1
        },
        {
            ID: 2,
            Nombre: "Tarea2",
            Descripcion: "Descripcion2",
            FechaLimite: '1999-01-08 04:05:06',
            InvolucradoFK: 3,
            ClienteFK: 2
        },
        {
            ID: 3,
            Nombre: "Tarea2",
            Descripcion: "Descripcion2",
            FechaLimite: '1999-01-08 04:05:06',
            InvolucradoFK: 2,
            ClienteFK: 3
        },
    ]
  });
  console.log({ tareas });
};


const data = [
    {
        ID: 1,
        Nombre: "Tarea1",
        Descripcion: "Descripcion1",
        FechaLimite: new Date('1999-01-08 04:05:06'),
        InvolucradoFK: 1,
        ClienteFK: 1
    },
    {
        ID: 2,
        Nombre: "Tarea2",
        Descripcion: "Descripcion2",
        FechaLimite: new Date('1999-01-08 04:05:06'),
        InvolucradoFK: 3,
        ClienteFK: 2
    },
    {
        ID: 1,
        Nombre: "Tarea2",
        Descripcion: "Descripcion2",
        FechaLimite: new Date('1999-01-08 04:05:06'),
        InvolucradoFK: 2,
        ClienteFK: 3
    },
]

export default data;