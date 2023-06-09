//app/routes/index.tsx
import { useLoaderData, V2_MetaFunction } from "@remix-run/react";
import PatientsTable from "~/components/PatientsTable";
import { json, LoaderFunction } from "@remix-run/node";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader: LoaderFunction = async () => {
  const response = await prisma.patients.findMany({
    select: {
      id: true,
      first_name: true,
      last_name: true,
      date_of_birth: true,
      gender: true,
      address: true,
      phone_number: true,
    }
  });
  return json(response);
};

export default function Index() {
  const data = useLoaderData();

  return (
    <PatientsTable patients={[data]}></PatientsTable>
  );
}
