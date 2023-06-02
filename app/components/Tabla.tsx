import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

export const Contribuyentes = [
  {
    id: 0,
    nombre: "Arcxp",
    rfc: "Washington Post",
    direccion: "Washington",
  },
  {
    id: 1,
    nombre: "Arcxp",
    rfc: "Washington Post",
    direccion: "Washington",
  },
  {
    id: 2,
    nombre: "Arcxp",
    rfc: "Washington Post",
    direccion: "Washington",
  },
  {
    id: 3,
    nombre: "Arcxp",
    rfc: "Washington Post",
    direccion: "Washington",
  },
  {
    id: 4,
    nombre: "Arcxp",
    rfc: "Washington Post",
    direccion: "Washington",
  },
];

interface Datos {
  id: number;
  rfc: string;
  nombre: string;
  direccion: string;
}

interface Props {
  data: Datos[];
}

const estilos = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(6.5),
      height: theme.spacing(6.5),
      borderRadius: "50%",
      border: `2px solid ${theme.palette.common.white}`,
    },
  })
);

const Contribuyente: React.FC<Props> = ({ data }) => {
  const clases = estilos();

  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-left">
        <thead className="pl-20 bg-white border border-gray-200"></thead>
        <tbody>
          {data.map((contribuyente) => (
            <tr
              key={contribuyente.id}
              className="bg-white border border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td width={50} className="px-6">
                <Avatar
                  alt={contribuyente.nombre}
                  src="../../public/avatars/example_1.jpg"
                  className={clases.avatar}
                />
              </td>
              <th className="py-4">
                <p className="font-inter text-lg font-semibold text-black">
                  {contribuyente.nombre}
                </p>
                <p className="font-inter text-base font-light">
                  {contribuyente.rfc}
                </p>
                <p className="font-inter text-sm font-normal text-[#878787]">
                  {contribuyente.direccion}
                </p>
              </th>
              <th className="w-40 px-6 justify-center">
                <button className="text-red-500 hover:text-red-600">
                  Eliminar
                </button>
                <button className="hover:text-sky-700">Modificar</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Tabla() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 relative shadow-md sm:rounded-lg overflow-hidden ">
          <div className="flex flex-col md:flex-row justify-end md:space-y-0 md:space-x-4 p-4">
            <button
              type="button"
              className="flex items-center justify-center text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
            >
              Agregar
            </button>
          </div>
          <Contribuyente data={Contribuyentes} />
        </div>
      </div>
    </section>
  );
}
