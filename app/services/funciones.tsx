import { db } from "./db";

export async function addBook(fields: any) {
    const book = await db.libro.create({ data: fields})
    
}

export async function readBook() {
    const libros = await db.libro.findMany()
    return libros;
    
}

/*export async function deleteBook(fields: any) {
    const book = await db.libro.delete({ data: fields})
    
}*/