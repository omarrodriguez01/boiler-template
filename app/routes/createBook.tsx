import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { addBook } from "~/services/funciones";
import type { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";

//Creacion de libros
export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix App" }];
};

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const titulo = form.get("titulo");
  const autor = Number(form.get("autor"));
  const stock = Number(form.get("stock"));

  const fields = { titulo: titulo, autor_id: autor, stock: stock };
    await addBook(fields);
    return redirect("/");
};

export default function CreateBook() {
  return (
    <div className="md:flex md:items-center mb-6 my-10 mx-auto">
      <Form
        method="POST"
        action="/createBook"
        className="w-full max-w-sm"
        noValidate
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Título:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              id="titulo"
              autoFocus={true}
              type="text"
              name="titulo"
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Autor ID:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="number"
              name="autor"
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Stock:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="number"
              name="stock"
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <button
          type="submit"
          value="Create Book"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-14"
        >
          Crear
        </button>
      </Form>
    </div>
  );
}
