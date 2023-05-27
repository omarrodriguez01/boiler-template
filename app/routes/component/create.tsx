import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

/* export const action = async ({ request }) => {
    const formData = await request.formData();
    const product = await createProject(formData);
    return;
}; */

export const loader = async () => {
    console.log( "DB returns: " + db.category.findMany())
    return json(    
    await db.category.findMany()
    );
};

export function CreateProduct() {
    const categories = useLoaderData<typeof loader>();
    console.log("Categories: " + categories)

    return(

        <form method="post" action="">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required></input>

                </div>
                <div>
                    <label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                    <select name="categoryId" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option selected>Choose a Category</option>
                    {categories.map((cat: any) => (
                        <option value={cat.id} >{ cat.name }</option>
                    ))}

                    </select>
                </div>

            </div>

        
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
            <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="0" required></input>
        </div>

        <div>
            <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
            <input type="number" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="0" required></input>
        </div>
    </div>

    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
    
    </form>
    

    );
}
