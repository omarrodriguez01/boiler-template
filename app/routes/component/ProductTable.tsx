import { Form, useActionData, useLoaderData, useTransition } from 'remix';
import { loader as TaskLoader } from 'app/routes/api/product/get';
import { db } from "~/utils/db.server";
import { Product } from "@prisma/client";


export const loader = TaskLoader;
// export const action = NewTaskAction;

export function ProductTable() {
    const products = useLoaderData<Product[]>();
    console.log("Products: " + products)
    return(

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">

                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            {products.map((product: any) => (
                    <form>

                    
                <tbody key={product.id}>
                    <tr className="bg-white border-b dark:bg-gray-900 ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {product.name}
                        </th>
                        <td className="px-6 py-4">
                            {product.categoryId}
                        </td>
                        <td className="px-6 py-4">
                            {product.price}
                        </td>
                        <td className="px-6 py-4">
                            {product.stock}
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 hover:underline">Delete</a>
                        </td>
                    </tr>

                </tbody>
                </form>
            ))}
        </table>
    </div>
    );
}
