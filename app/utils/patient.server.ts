import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const getPatients = async () => {
    const response = await prisma.patients.findMany();
    return response;
}