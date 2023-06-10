export default function PatientsTable({ patients } : any) {
    return(
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient: any, index: number) => (
                    <tr key={patient.id}>
                        <td>{ index + 1 }</td>
                        <td>{ patient.first_name }</td>
                        <td>{ patient.last_name }</td>
                        <td>{ patient.date_of_birth }</td>
                        <td>{ patient.gender }</td>
                        <td>{ patient.address }</td>
                        <td>{ patient.phone_number }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

 
