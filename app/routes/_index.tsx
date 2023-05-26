import type { V2_MetaFunction } from "@remix-run/react";
import Formulario from "~/components/Formulario";
import Tabla from "~/components/Tabla";


export default function Index() {
  return (
    <div>
      <Tabla></Tabla>
    </div>
  );
}

//<Tabla props={props.about}/>