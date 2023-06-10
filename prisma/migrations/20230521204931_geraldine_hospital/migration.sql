-- CreateTable
CREATE TABLE "Departments" (
    "id" SERIAL NOT NULL,
    "department_name" TEXT NOT NULL,

    CONSTRAINT "Departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctors" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "Doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patients" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" TEXT,

    CONSTRAINT "Patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "appointment_date" TIMESTAMP(3),
    "appointment_time" TIMESTAMP(3),

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "id" SERIAL NOT NULL,
    "medication_name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prescriptions" (
    "id" SERIAL NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "medication_id" INTEGER NOT NULL,
    "dosage" TEXT,
    "prescription_date" TIMESTAMP(3),

    CONSTRAINT "Prescriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab_tests" (
    "id" SERIAL NOT NULL,
    "test_name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Lab_tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab_results" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "lab_test_id" INTEGER NOT NULL,
    "result_value" TEXT,
    "result_date" TIMESTAMP(3),

    CONSTRAINT "Lab_results_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Doctors" ADD CONSTRAINT "Doctors_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescriptions" ADD CONSTRAINT "Prescriptions_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescriptions" ADD CONSTRAINT "Prescriptions_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescriptions" ADD CONSTRAINT "Prescriptions_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "Medications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lab_results" ADD CONSTRAINT "Lab_results_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lab_results" ADD CONSTRAINT "Lab_results_lab_test_id_fkey" FOREIGN KEY ("lab_test_id") REFERENCES "Lab_tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
