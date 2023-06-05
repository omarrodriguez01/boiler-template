import type { V2_MetaFunction } from "@remix-run/react";
import DataForm from 'app/components/createForm';
import UpdateForm from 'app/components/updateData';

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <DataForm></DataForm>
      <UpdateForm></UpdateForm>
    </div>
  );
}
