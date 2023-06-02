// PONER REQUERIMIENTOS
// Manejo de errores
// Clean code: indentado (Prettier, etc.)
export default function Formulario() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Contribuyente
        </h2>
        <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Dirección
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Calle 123, Ciudad de México"
                required
              ></input>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Juan Pérez"
                required
              ></input>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                RFC
              </label>
              <input
                type="text"
                name="rfc"
                id="rfc"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="PERJ901231ABC"
                required
              ></input>
            </div>
          </div>
          <div className="flex items-center justify-start mt-4 gap-x-2">
            <button
              type="submit"
              className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
            >
              Aceptar
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
