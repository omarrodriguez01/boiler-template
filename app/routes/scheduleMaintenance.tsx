import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function scheduleMaintenance() {
    return (
      <tr>
        <th scope="col" className="px-6 py-3">
            Product name
        </th>
        <th scope="col" className="px-6 py-3">
            Color
        </th>
        <th scope="col" className="px-6 py-3">
            Category
        </th>
        <th scope="col" className="px-6 py-3">
            Price
        </th>
    </tr>
      );
}