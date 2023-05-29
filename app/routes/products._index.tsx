import type { V2_MetaFunction } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProductTable } from "./component/ProductTable";
import { CreateProduct } from "./component/CreateProduct";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export async function action({ request }: any) {
  const form = await request.formData();

  // Handle Creation: Post Method
  if (request.method === "POST"){
    const data = { name_product: form.get("name_product"), categoryId: Number(form.get("categoryId")), price: Number(form.get("price")), stock: Number(form.get("stock"))  };
      
    const formErrors = {
        name: validateName(data.name_product),
        categoryId: validateCategory(data.categoryId),
        price: validatePrice(data.price),
        stock: validateStock(data.stock),
      };

      if (Object.values(formErrors).some(Boolean)) return { formErrors };


      const product = await db.product.create({
      data: { name_product: form.get("name_product"), categoryId: Number(form.get("categoryId")), price: Number(form.get("price")), stock: Number(form.get("stock"))  },
      });
      console.log(product);
      return redirect(`/products/${product.id}`)
  }

  // Handle Creation: Delete Method
  if (request.method === "DELETE") {
    const delProduct = await db.product.delete({
      where: {
        id: Number(form.get("id")),
      },
    });
    console.log(delProduct);
  }

  return true;
}

const validateName = (name: any) => {
    if (!name) {
      return "Product Name is required";
    } else if (typeof name !== "string" || name.length < 3) {
      return `Name must be at least 3 characters long`;
    }
};

const validateCategory = (categoryId: any) => {
    if (!categoryId) {
      return "Category is required";
    } else if (typeof categoryId !== "number" || categoryId < 0) {
      return `Category must be selected`;
    }
};

const validateStock = (stock: any) => {
    if (!stock) {
      return "Stock is required";
    } 
    else if (typeof stock !== "number" || stock < 0) {
      return `Stock must be a valid number`;
    }
};

const validatePrice = (price: any) => {
    if (!price) {
      return "Price is required";
    } 
    else if (typeof price !== "number" || price < 0) {
      return `Price must be a valid number`;
    }
};

export async function loader() {
  const allProducts = await db.product.findMany();
  
  return allProducts;
}

export default function ProdIndex() {
  const props = useLoaderData();

  return (
    <>
      <body>
        <div className="m-6 p-4 relative max-w-m overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className=" text-3xl font-bold ">Products</h1>
        <br></br>
          <ProductTable products={props}></ProductTable>
          <br></br><br></br>
          <h1 className=" text-3xl font-bold ">Register Product</h1>
          <br></br>
          <CreateProduct></CreateProduct>

        </div>

      </body>
    </>
  );
}

