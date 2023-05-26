import { V2_MetaFunction, useLoaderData } from "@remix-run/react";
import { Form } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {

  const patients = useLoaderData();

  return (
    <main className="flex flex-col items-center mt-8">
      <h1 className="text-2xl mb-6 bg-blue-400">Medical Page</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-l-md"
          placeholder="Enter patient name"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md ml-2">Add Patient</button>
      </div>
      <ul className="list-disc list-inside">
      </ul>
      <div>Add Patient</div>
      <Form method="post" className="">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="age">Date of birth: </label>
        <input id="age" name="age" type="date" />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option> 
        </select>
        <label htmlFor="address">Address:</label>
        <input id="address" name="address" type="text" />
        <label htmlFor="phone">Phone:</label>
        <input id="phone" name="phone" type="text" />
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="text" />

      </Form>
    </main>
  );
}


export async function loader(){
  return {patients: []};
};