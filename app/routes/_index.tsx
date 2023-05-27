import { Prisma } from "@prisma/client";
import { ActionArgs, json, redirect } from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import { db } from "~/utils/db.server";
import ProductList from "../components/ProductList";
import { loadProducts } from "~/utils/user.server";

export const loader = async () => {
    return await loadProducts(); 
};

export default function Index() {
    const data = useLoaderData<typeof loader>();
    console.log(data);
    return (
      <>
        <div>
          <h1>Le Garcon</h1>
        </div>
  
        <div>
          <h2>Place Order</h2>
          <ProductList products = {data}/>
        </div>
      </>
    );
}

export async function action({ request }: ActionArgs) {
  // read body
  const body = await request.json()
  let data: Prisma.productos_menuCreateInput

  if (request.method === 'POST') {
      data = {
        nombre: body.nombre,
        descripcion: body.descripcion,
        precio: body.precio,
        categoria: body.categoria,
        imagen_url: body.imagen_url,
        createdAt: body.createdAt,
        updatedAt: body.updatedAt
      }
      await db.productos_menu.create({
          data: data,
      });
      console.log("added new todo")

      return redirect('/');
  }

  if (request.method === 'DELETE') {
    const id = body.id

    await db.productos_menu.delete({
        where: {producto_menu_id: id},
    });

    return redirect('/');
}
}

