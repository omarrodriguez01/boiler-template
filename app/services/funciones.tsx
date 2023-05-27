import { db } from "./db";

export async function addBook(fields: any) {
    const book = await db.libro.create({ data: fields})
    
}

export async function readBook(fields: any) {
    const book = await db.libro.findMany({ data: fields})
    
}

export async function deleteBook(fields: any) {
    const book = await db.libro.delete({ data: fields})
    
}