import { Product } from "@prisma/client";
import { Form, Link, useTransition } from "@remix-run/react";


export function ProductTable(products: any) {
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
            {products.products.map((product: Product) => (
                <tbody key={product.id}>
                    <tr className="bg-white border-b dark:bg-gray-900 ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {product.name_product}
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
                            <Link to={`${product.id}`}>
                                <button className="font-medium text-blue-600 hover:underline">View</button>
                            </Link>
                            <Form method="DELETE">
                                <input type={"hidden"} value={product.id} name="id" />
                                <button type="submit" className="font-medium text-blue-600 hover:underline">Delete</button>
                            </Form>
                            
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    </div>
    );
}
