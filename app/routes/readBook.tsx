import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { readBook } from "~/services/funciones";
import type { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";

//Creacion de libros
export const meta: V2_MetaFunction = () => {
  return [{ title: "Libros" }];
};

export default function VideoAdmin() {
    return (
        <>
        <div>
           <div className="flex flex-col px-20 py-8  place-content-center">
               <p className="text-lg font-bold py-5">Libros</p>
           </div>

           <button className="bg-bluefigma4 text-base font-semibold text-white p-2 rounded-lg ml-20">Go Back</button>

        </div>
        </>
    );
}