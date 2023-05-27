import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { deleteProducts } from "~/utils/user.server";

export default function productList({products}){
    return (
        <ul id="note-list">
          {products.map((product) => (
            <li key={product.producto_menu_id} className="Product">
              <article>
                <header>
                  <h2>{product.nombre}</h2>
                  <h3>${product.precio}</h3>
                </header>
                <p>{product.descripcion}</p>
                <button onClick={() => deleteProducts(product.producto_menu_id)}>Delete</button>
              </article>
            </li>
          ))}
        </ul>
    );
 }





