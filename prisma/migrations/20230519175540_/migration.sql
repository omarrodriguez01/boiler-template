-- CreateTable
CREATE TABLE "empleados" (
    "empleado_id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellidos" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "celular" VARCHAR(20),
    "fecha_contratado" DATE NOT NULL,
    "puesto" VARCHAR(50) NOT NULL,
    "salario" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "empleados_pkey" PRIMARY KEY ("empleado_id")
);

-- CreateTable
CREATE TABLE "orden_items" (
    "orden_item_id" SERIAL NOT NULL,
    "orden_id" INTEGER NOT NULL,
    "producto_menu_id" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "orden_items_pkey" PRIMARY KEY ("orden_item_id")
);

-- CreateTable
CREATE TABLE "ordenes" (
    "orden_id" SERIAL NOT NULL,
    "cliente_nombre" VARCHAR(100) NOT NULL,
    "orden_fecha" TIMESTAMP(6) NOT NULL,
    "mesa_numero" INTEGER NOT NULL,
    "estatus" VARCHAR(20) NOT NULL,
    "empleado_id" INTEGER NOT NULL,

    CONSTRAINT "ordenes_pkey" PRIMARY KEY ("orden_id")
);

-- CreateTable
CREATE TABLE "productos_menu" (
    "producto_menu_id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "precio" DECIMAL(10,2) NOT NULL,
    "categoria" VARCHAR(50) NOT NULL,
    "imagen_url" VARCHAR(255),

    CONSTRAINT "productos_menu_pkey" PRIMARY KEY ("producto_menu_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "empleados_email_key" ON "empleados"("email");

-- AddForeignKey
ALTER TABLE "orden_items" ADD CONSTRAINT "orden_items_orden_id_fkey" FOREIGN KEY ("orden_id") REFERENCES "ordenes"("orden_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orden_items" ADD CONSTRAINT "orden_items_producto_menu_id_fkey" FOREIGN KEY ("producto_menu_id") REFERENCES "productos_menu"("producto_menu_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ordenes" ADD CONSTRAINT "ordenes_empleado_id_fkey" FOREIGN KEY ("empleado_id") REFERENCES "empleados"("empleado_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
