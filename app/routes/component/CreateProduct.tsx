import { Product } from "@prisma/client";
import { Form, Link, useTransition, useActionData } from "@remix-run/react";  

export function CreateProduct() {
    const actionData = useActionData();
    const { state } = useTransition();
    const busy = state === "submitting";
    return(
        <>
        <Form method="POST">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                    <input type="text" name="name_product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required></input>
                    {actionData?.formErrors?.name ? (
                        <p style={{ color: "red" }}>{actionData?.formErrors?.name}</p>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                    <select name="categoryId" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                    <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="0" required></input>
                    {actionData?.formErrors?.price ? (
                        <p style={{ color: "red" }}>{actionData?.formErrors?.price}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
                    <input type="number" name="stock" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="0" required></input>
                    {actionData?.formErrors?.stock ? (
                        <p style={{ color: "red" }}>{actionData?.formErrors?.stock}</p>
                    ) : null}
                </div>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
            {busy ? "Creating..." : "Create Product"}
            </button>
            
        </Form>
        </>
        

    );
}
