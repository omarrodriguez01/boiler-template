import type { V2_MetaFunction } from "@remix-run/react";
import { useEffect, useState } from "react";
import mntRow from "~/components/mntRow";
import mntRowEdit from "~/components/mntRowEdit";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const [editRow, setEditRow] = useState<number>(-1);
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]);
  const [customerData, setCustomerData] = useState<any[]>([]);
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  const [carData, setCarData] = useState<any[]>([]);

  const url = "http://localhost:3001/"

  //Validate data of maintenance element
  //(check if customer_id, car_id, and employee_id are numbers)
  //(check if maintenance_date is a date)
  const validate: any = (properties: any) => {
    const x = new Date(properties.maintenance_date);
    if (x instanceof Date && !isNaN(x.valueOf())) {
      return isNaN(properties.customer_id) ||
        isNaN(properties.car_id) ||
        isNaN(properties.employee_id)
        ? false
        : true;
    } else {
      return false;
    }
  };

  //Load data from maintenances, customers, employees, and cars tables
  const loadData: any = async () => {
    const response = await fetch(url + "api/maintenances");
    const maintenances = await response.json();
    setMaintenanceData(maintenances);

    const response2 = await fetch(url + "api/customers");
    const customers = await response2.json();
    setCustomerData(customers);

    const response3 = await fetch(url + "api/employees");
    const employees = await response3.json();
    setEmployeeData(employees);

    const response4 = await fetch(url + "api/cars");
    const cars = await response4.json();
    setCarData(cars);
  };

  useEffect(() => {
    loadData();
  }, []);

  //CREATE a new maintenance element
  const createData: any = async (properties: any) => {
    const response = await fetch(
      "http://localhost:3001/api/createMaintenance",
      {
        method: "POST",
        body: JSON.stringify({
          maintenance_id: properties.maintenance_id,
          customer_id: parseInt(properties.customer_id),
          car_id: parseInt(properties.car_id),
          employee_id: parseInt(properties.employee_id),
          description: properties.description,
          maintenance_date: properties.maintenance_date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if (!result) {
      alert(
        "Error updating maintenance. Make sure that the IDs are within range."
      );
    }
    loadData(); //Reload data
  };

  //UPDATE an existing maintenance element
  const editData: any = async (properties: any) => {
    if (validate(properties)) { //Validate data
      const response = await fetch(
        "http://localhost:3001/api/editMaintenance",
        {
          method: "POST",
          body: JSON.stringify({
            maintenance_id: properties.maintenance_id,
            customer_id: parseInt(properties.customer_id),
            car_id: parseInt(properties.car_id),
            employee_id: parseInt(properties.employee_id),
            description: properties.description,
            maintenance_date: properties.maintenance_date,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      if (!result) {
        alert(
          "Error updating maintenance. Make sure that the IDs are within range."
        );
      }

      loadData(); //Reload data
    } else {
      alert(
        "Error updating maintenance. Make sure that you enter IDs of cusomer, car, and employee, not the names and that the date is in the correct format."
      );
    }
  };

  //DELETE an existing maintenance element
  const deleteData: any = async (maintenance_id: number) => {
    const response = await fetch(
      "http://localhost:3001/api/deleteMaintenance",
      {
        method: "POST",
        body: JSON.stringify({ maintenance_id: maintenance_id }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    loadData(); //Reload data
  };

  //Functions called by the table buttons ---------------------------------------------------------
  const addMaintenance: any = (
    e: React.MouseEvent<HTMLButtonElement>,
    properties: any
  ) => {
    if (validate(properties)) { //Validate data
      createData(properties);
      document.getElementById("add_customer_id").value = "";
      document.getElementById("add_car_id").value = "";
      document.getElementById("add_employee_id").value = "";
      document.getElementById("add_description").value = "";
      document.getElementById("add_maintenance_date").value = "";
    } else {
      alert(
        "Error adding maintenance. Make sure that you enter IDs of cusomer, car, and employee, not the names and that the date is valid."
      );
    }
  };

  const editMaintenance: any = (
    e: React.MouseEvent<HTMLButtonElement>,
    maintenance_id: number
  ) => {
    setEditRow(maintenance_id);
  };

  const confirmEdit: any = (
    e: React.MouseEvent<HTMLButtonElement>,
    properties: any
  ) => {
    editData(properties);
    setEditRow(-1);
  };

  const cancelEdit: any = (
    e: React.MouseEvent<HTMLButtonElement>,
    maintenance_id: number
  ) => {
    setEditRow(-1);
  };

  const deleteMaintenance: any = (
    e: React.MouseEvent<HTMLButtonElement>,
    maintenance_id: any
  ) => {
    deleteData(maintenance_id);
    setEditRow(-1);
  };

  //Table ------------------------------------------------------------------------------------------
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Employee
            </th>
            <th scope="col" className="px-6 py-3">
              Car
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {maintenanceData.length > 0 &&
          customerData.length > 0 &&
          employeeData.length > 0 &&
          carData.length > 0 ? (
            maintenanceData.map((maintenance: any) =>
              maintenance.maintenance_id === editRow
                ? mntRowEdit(
                    maintenance,
                    customerData.filter(function (item: any) {
                      return item.customer_id === maintenance.customer_id;
                    })[0].customer_name,
                    employeeData.filter(function (item: any) {
                      return item.employee_id === maintenance.employee_id;
                    })[0].employee_name,
                    carData.filter(function (item: any) {
                      return item.car_id === maintenance.car_id;
                    })[0].car_name,
                    confirmEdit,
                    cancelEdit
                  )
                : mntRow(
                    maintenance,
                    customerData.filter(function (item: any) {
                      return item.customer_id === maintenance.customer_id;
                    })[0].customer_name,
                    employeeData.filter(function (item: any) {
                      return item.employee_id === maintenance.employee_id;
                    })[0].employee_name,
                    carData.filter(function (item: any) {
                      return item.car_id === maintenance.car_id;
                    })[0].car_name,
                    editMaintenance,
                    deleteMaintenance
                  )
            )
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>

      <button
        onClick={(e) =>
          addMaintenance(e, {
            customer_id: document.getElementById("add_customer_id").value,
            car_id: document.getElementById("add_car_id").value,
            employee_id: document.getElementById("add_employee_id").value,
            description: document.getElementById("add_description").value,
            maintenance_date: document.getElementById("add_maintenance_date")
              .value,
          })
        }
      >
        Add Maintenance
      </button>

      <table>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <input
                type="text"
                id="add_description"
                placeholder="Description"
              ></input>
            </th>
            <td className="px-6 py-4">
              <input
                type="text"
                id="add_maintenance_date"
                placeholder="2001-01-01T00:00:00.000Z"
              ></input>
            </td>
            <td className="px-6 py-4">
              <input
                type="text"
                id="add_customer_id"
                placeholder="customer_id"
              />
            </td>
            <td className="px-6 py-4">
              <input
                type="text"
                id="add_employee_id"
                placeholder="employee_id"
              ></input>
            </td>
            <td className="px-6 py-4">
              <input type="text" id="add_car_id" placeholder="car_id"></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
