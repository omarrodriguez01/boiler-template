export default function mntRow(properties: any, customerName: any, employeeName: any,
  carName: any, editButton: any, deleteButton: any) {

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {properties.description}
      </th>
      <td className="px-6 py-4">
        {properties.maintenance_date}
      </td>
      <td className="px-6 py-4">
        {customerName}
      </td>
      <td className="px-6 py-4">
        {employeeName}
      </td>
      <td className="px-6 py-4">
        {carName}
      </td>
      <td className="px-6 py-4">
        <button onClick={(e) => editButton(e, properties.maintenance_id)}>Edit</button>
      </td>
      <td className="px-6 py-4">
        <button onClick={(e) => deleteButton(e, properties.maintenance_id)}>Delete</button>
      </td>
    </tr>
  );
}