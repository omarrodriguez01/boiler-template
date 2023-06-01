-- CreateTable
CREATE TABLE "productos" (
    "idProducto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "stock" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ventas" (
    "idVenta" SERIAL NOT NULL,
    "total" DECIMAL(65,30) NOT NULL
);

-- CreateTable
CREATE TABLE "detalle_Ventas" (
    "idDetalle" SERIAL NOT NULL,
    "idVenta" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "subtotal" DECIMAL(65,30) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "productos_idProducto_key" ON "productos"("idProducto");

-- CreateIndex
CREATE UNIQUE INDEX "ventas_idVenta_key" ON "ventas"("idVenta");

-- CreateIndex
CREATE UNIQUE INDEX "detalle_Ventas_idDetalle_key" ON "detalle_Ventas"("idDetalle");

-- AddForeignKey
ALTER TABLE "detalle_Ventas" ADD CONSTRAINT "detalle_Ventas_idVenta_fkey" FOREIGN KEY ("idVenta") REFERENCES "ventas"("idVenta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_Ventas" ADD CONSTRAINT "detalle_Ventas_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;
