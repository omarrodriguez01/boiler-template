-- CreateTable
CREATE TABLE "Contribuyente" (
    "id" SERIAL NOT NULL,
    "rfc" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contribuyente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Factura" (
    "id" SERIAL NOT NULL,
    "contribuyenteId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "iva" DOUBLE PRECISION NOT NULL,
    "descuento" DOUBLE PRECISION,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pago" (
    "id" SERIAL NOT NULL,
    "contribuyenteId" INTEGER NOT NULL,
    "fechaPago" TIMESTAMP(3) NOT NULL,
    "montoPagado" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallePago" (
    "id" SERIAL NOT NULL,
    "pagoId" INTEGER NOT NULL,
    "concepto" TEXT,
    "monto" DOUBLE PRECISION NOT NULL,
    "facturaId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetallePago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Retencion" (
    "id" SERIAL NOT NULL,
    "pagoId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "tasa" DOUBLE PRECISION NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Retencion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleFactura" (
    "id" SERIAL NOT NULL,
    "facturaId" INTEGER NOT NULL,
    "producto" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetalleFactura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Impuesto" (
    "id" SERIAL NOT NULL,
    "facturaId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "tasa" DOUBLE PRECISION NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Impuesto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_contribuyenteId_fkey" FOREIGN KEY ("contribuyenteId") REFERENCES "Contribuyente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_contribuyenteId_fkey" FOREIGN KEY ("contribuyenteId") REFERENCES "Contribuyente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePago" ADD CONSTRAINT "DetallePago_pagoId_fkey" FOREIGN KEY ("pagoId") REFERENCES "Pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retencion" ADD CONSTRAINT "Retencion_pagoId_fkey" FOREIGN KEY ("pagoId") REFERENCES "Pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleFactura" ADD CONSTRAINT "DetalleFactura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Impuesto" ADD CONSTRAINT "Impuesto_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
