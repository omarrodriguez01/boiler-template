import { PrismaClient } from '@prisma/client'
import { appointmentsSeeder } from './seeders/appointmentsSeeder';
import { departmentsSeeder } from './seeders/departmentsSeeder';
import { doctorsSeeder } from './seeders/doctorsSeeder';
import { labResultsSeeder } from './seeders/labResultsSeeder';
import { labTestsSeeder } from './seeders/labTestsSeeder';
import { medicationsSeeder } from './seeders/medicationsSeeder';
import { patientsSeeder } from './seeders/patientsSeeder';
import { prescriptionsSeeder } from './seeders/prescriptionsSeeder';


const prisma = new PrismaClient()


async function main() {
	await departmentsSeeder();
	await doctorsSeeder();
	await patientsSeeder();
	await appointmentsSeeder();
	await medicationsSeeder();
	await prescriptionsSeeder();
	await labTestsSeeder();
	await labResultsSeeder();
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})