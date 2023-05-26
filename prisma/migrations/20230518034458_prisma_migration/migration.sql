-- CreateTable
CREATE TABLE "Customers" (
    "customer_id" SERIAL NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_phone" TEXT NOT NULL,
    "customer_address" TEXT NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Employees" (
    "employee_id" SERIAL NOT NULL,
    "employeer_name" TEXT NOT NULL,
    "employee_email" TEXT NOT NULL,
    "employee_phone" TEXT NOT NULL,
    "customer_specialty" TEXT NOT NULL,

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "Cars" (
    "car_id" SERIAL NOT NULL,
    "car_name" TEXT NOT NULL,
    "car_model" TEXT NOT NULL,
    "car_year" TEXT NOT NULL,
    "car_color" TEXT NOT NULL,
    "car_price" INTEGER NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("car_id")
);

-- CreateTable
CREATE TABLE "Maintenances" (
    "maintenance_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "car_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "maintenance_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Maintenances_pkey" PRIMARY KEY ("maintenance_id")
);

-- CreateTable
CREATE TABLE "Spare_Parts" (
    "spare_part_id" SERIAL NOT NULL,
    "car_id" INTEGER NOT NULL,
    "spare_part_name" TEXT NOT NULL,
    "spare_part_price" INTEGER NOT NULL,
    "spare_part_stock" INTEGER NOT NULL,

    CONSTRAINT "Spare_Parts_pkey" PRIMARY KEY ("spare_part_id")
);

-- AddForeignKey
ALTER TABLE "Maintenances" ADD CONSTRAINT "Maintenances_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customers"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenances" ADD CONSTRAINT "Maintenances_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Cars"("car_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenances" ADD CONSTRAINT "Maintenances_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spare_Parts" ADD CONSTRAINT "Spare_Parts_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Cars"("car_id") ON DELETE RESTRICT ON UPDATE CASCADE;
