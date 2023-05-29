import { Product } from "@prisma/client";
import { db } from "~/utils/db.server";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useParams,
  useTransition,
} from "@remix-run/react";

export async function loader({ params }: any) {
  const product = await db.product.findUnique({
    where: {
      id: parseInt(params?.productId),
    },
  });
  console.log("product with id = " + product?.id + " ", product);

  return product;
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

export async function action({ request }: any) {
  const form = await request.formData();
  const data = { name_product: form.get("name_product"), categoryId: Number(form.get("categoryId")), price: Number(form.get("price")), stock: Number(form.get("stock"))  };
      
    const formErrors = {
        name: validateName(data.name_product),
        categoryId: validateCategory(data.categoryId),
        price: validatePrice(data.price),
        stock: validateStock(data.stock),
      };

      if (Object.values(formErrors).some(Boolean)) return { formErrors };



  // Handle Creation: UPDATE Method
  if (request.method === "POST") {
    const updateProduct = await db.product.update({
      where: {
        id: parseInt(form.get("id")),
      },
      data: {
        name_product: form.get("name_product"),
        categoryId: parseInt(form.get("categoryId")),
        price: parseInt(form.get("price")),
        stock: parseInt(form.get("stock")),
      },
    });
    console.log(updateProduct);
  }

  return true;
}

export default function ProductsById() {
  const actionData = useActionData();

  const product = useLoaderData();
  const { state } = useTransition();
  const busy = state === "submitting";
  const { id } = useParams();


  return (
    <>
      <body>
        <div className="m-6 p-4 relative max-w-m overflow-x-auto shadow-md sm:rounded-lg">
          <Link to={`/`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
              Home
            </button>
          </Link>

          <h1 className=" text-3xl font-bold ">Update Product</h1>
          <div></div>
          <h2 className=" text-1xl font-bold ">
            Manage Information for {product.name_product}
          </h2>

          <Form method="POST">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name_product"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Name"
                  required
                ></input>
                                    {actionData?.formErrors?.name ? (
                        <p style={{ color: "red" }}>{actionData?.formErrors?.name}</p>
                    ) : null}
              </div>
              <div>
                <label
                  htmlFor="categoryId"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Category
                </label>
                <select
                  name="categoryId"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="">Choose a Category</option>
                  <option value="1">Pan Dulce</option>
                  <option value="2">Pan Blanco</option>
                  <option value="3">Bizcocheria</option>
                </select>
                {actionData?.formErrors?.categoryId ? (
                        <p style={{ color: "red" }}>{actionData?.formErrors?.categoryId}</p>
                    ) : null}
              </div>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="0"
                  required
                ></input>
                                    {actionData?.formErrors?.price ? (
                        <p style={{ color: "red" }}>{actionData?.formErrors?.price}</p>
                    ) : null}
              </div>

              <div>
                <label
                  htmlFor="stock"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="0"
                  required
                ></input>
                {actionData?.formErrors?.stock ? (
                        <p style={{ color: "red" }}>{actionData?.formErrors?.stock}</p>
                    ) : null}
              </div>
            </div>
            <input type={"hidden"} value={product.id} name="id" />

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              {busy ? "Updating..." : "Update Product"}
            </button>
          </Form>
        </div>
      </body>
    </>
  );
}
