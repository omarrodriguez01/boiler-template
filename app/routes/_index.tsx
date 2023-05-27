import type { V2_MetaFunction } from "@remix-run/react";
import { CreateProduct } from "~/routes/component/create";
import { db } from "~/utils/db.server";
import { ProductTable } from "./component/ProductTable";
import { getProducts } from "~/utils/products.server";
import { json } from "@remix-run/node"; // or cloudflare/deno

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};
/* 
export const loader: LoaderFunction = async ({ request }) => {
  const products = await getProducts();
  return json( products )
}


 */
export default function Index() {
  return (
    <>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="m-6 p-4 relative max-w-m overflow-x-auto shadow-md sm:rounded-lg">
          <h1 className=" text-3xl font-bold ">Register Product</h1>
          <br></br>

          <CreateProduct></CreateProduct>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>

      </body>
    </>
  );
}

