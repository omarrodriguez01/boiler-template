import { Libro } from "@prisma/client";
import { readBook } from "~/services/funciones";
import { Form, Link, useTransition } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";

export const actionRead = async ({ request }: ActionArgs) => {
  const libros = await readBook();
  return libros;
};

export function BookTable(libros: any) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-black bg-purple-100">
        <thead className="text-xs text-white uppercase bg-purple-500 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Titulo
            </th>
            <th scope="col" className="px-6 py-3">
              Autor
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
          </tr>
        </thead>
        {libros.libros.map((libro: Libro) => (
          <tbody key={libro.id}>
            <tr className="bg-white border-b dark:bg-purple-900 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {libro.titulo}
              </th>
              <td className="px-6 py-4">{libro.autor_id}</td>
              <td className="px-6 py-4">{libro.stock}</td>
              <td className="px-6 py-4">
                <Link to={`${libro.id}`}>
                  <button className="font-medium text-blue-600 hover:underline">
                    View
                  </button>
                </Link>
                <Form method="DELETE">
                  <input type={"hidden"} value={libro.id} name="id" />
                  <button
                    type="submit"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Delete
                  </button>
                </Form>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
