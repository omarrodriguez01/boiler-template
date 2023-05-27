import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seed = async () => {
    // Crear un paciente
    const paciente = await prisma.paciente.create({
        data: {
            nombre: 'Juan',
            fechaNacimiento: new Date('1990-01-01'),
            sexo: 'Masculino',
            historialMedico: 'Ninguno',
        },
    });
    console.log({ paciente });

    // Crear un medico
    const medico = await prisma.medico.create({
        data: {
            nombre: 'Dra. Maria',
            especialidad: 'Cardiología',
        },
    });
    console.log({ medico });

    // Crear una cita
    const cita = await prisma.cita.create({
        data: {
            fecha: new Date('2023-01-01'),
            hora: '10:00',
            pacienteId: paciente.id, 
            medicoId: medico.id,
        },
    });
    console.log({ cita });

    // Crear un tratamiento
    const tratamiento = await prisma.tratamiento.create({
        data: {
            descripcion: 'Tratamiento de la presión arterial',
            costo: 100.0,
            fechaFinal: new Date('2023-12-31'),
        },
    });
    console.log({ tratamiento });

    // Asignar el tratamiento al paciente
    const tratamientoAsignado = await prisma.paciente.update({
        where: {
            id: paciente.id,
        },
        data: {
            tratamientos: {
                connect: {
                    id: tratamiento.id,
                },
            },
        },
    });
    console.log({ tratamientoAsignado });
};

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
        
    })
    .finally(async () => {
        await prisma.$disconnect();
    });



