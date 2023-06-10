-- DropForeignKey
ALTER TABLE "Appointments" DROP CONSTRAINT "Appointments_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "Appointments" DROP CONSTRAINT "Appointments_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Doctors" DROP CONSTRAINT "Doctors_department_id_fkey";

-- DropForeignKey
ALTER TABLE "Lab_results" DROP CONSTRAINT "Lab_results_lab_test_id_fkey";

-- DropForeignKey
ALTER TABLE "Lab_results" DROP CONSTRAINT "Lab_results_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Prescriptions" DROP CONSTRAINT "Prescriptions_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "Prescriptions" DROP CONSTRAINT "Prescriptions_medication_id_fkey";

-- DropForeignKey
ALTER TABLE "Prescriptions" DROP CONSTRAINT "Prescriptions_patient_id_fkey";

-- AddForeignKey
ALTER TABLE "Doctors" ADD CONSTRAINT "Doctors_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescriptions" ADD CONSTRAINT "Prescriptions_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescriptions" ADD CONSTRAINT "Prescriptions_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescriptions" ADD CONSTRAINT "Prescriptions_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "Medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lab_results" ADD CONSTRAINT "Lab_results_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lab_results" ADD CONSTRAINT "Lab_results_lab_test_id_fkey" FOREIGN KEY ("lab_test_id") REFERENCES "Lab_tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
