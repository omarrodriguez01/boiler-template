export default function mntRowEdit(
  properties: any,
  customerName: any,
  employeeName: any,
  carName: any,
  confirmButton: any,
  cancelButton: any
) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <input
          type="text"
          id="description"
          defaultValue={properties.description}
        ></input>
      </th>
      <td className="px-6 py-4">
        <input
          type="text"
          id="maintenance_date"
          defaultValue={properties.maintenance_date}
        ></input>
      </td>
      <td className="px-6 py-4">
        <input type="text" id="customer_id" defaultValue={customerName} />
      </td>
      <td className="px-6 py-4">
        <input type="text" id="employee_id" defaultValue={employeeName}></input>
      </td>
      <td className="px-6 py-4">
        <input type="text" id="car_id" defaultValue={carName}></input>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={(e) =>
            confirmButton(e, {
              maintenance_id: properties.maintenance_id,
              customer_id: document.getElementById("customer_id").value,
              car_id: document.getElementById("car_id").value,
              employee_id: document.getElementById("employee_id").value,
              description: document.getElementById("description").value,
              maintenance_date:
                document.getElementById("maintenance_date").value,
            })
          }
        >
          Confirm
        </button>
      </td>
      <td className="px-6 py-4">
        <button onClick={cancelButton}>Cancel</button>
      </td>
    </tr>
  );
}
