import type { V2_MetaFunction } from "@remix-run/react";
import AllMusic from "~/components/AllMusic";
import NavBar from "~/components/NavBar";
import SideBar from "~/components/SideBar";

import { prisma } from "../server/db";

export const meta: V2_MetaFunction = () => {
  return [{ title: "IndieVibe" }];
};

export default function Index(props: any) {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <div className="flex">
        <SideBar/>
        <div>
          <AllMusic props={props.songs}/>
        </div>
      </div>
    </div>
  );
}


export async function getStaticProps() {
 
  //const songs = await prisma.cancion.findMany();
  const songs = await prisma.cancion.findMany({
    where: {
      id_cancion: 1,
    },
  });
  return {
    props: {
      songs: songs,
    },
  };
}
