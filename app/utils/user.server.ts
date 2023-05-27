import { db } from "./db.server";

export async function deleteProducts(id: number){
    await db.productos_menu.delete({
        where: {producto_menu_id: id},
    })
};

export async function loadProducts(){
    const val = await db.productos_menu.findMany(); 
    return val; 
}