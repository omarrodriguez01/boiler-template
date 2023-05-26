-- DropForeignKey
ALTER TABLE "DetalleFactura" DROP CONSTRAINT "DetalleFactura_facturaId_fkey";

-- DropForeignKey
ALTER TABLE "DetallePago" DROP CONSTRAINT "DetallePago_pagoId_fkey";

-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_contribuyenteId_fkey";

-- DropForeignKey
ALTER TABLE "Impuesto" DROP CONSTRAINT "Impuesto_facturaId_fkey";

-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_contribuyenteId_fkey";

-- DropForeignKey
ALTER TABLE "Retencion" DROP CONSTRAINT "Retencion_pagoId_fkey";

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_contribuyenteId_fkey" FOREIGN KEY ("contribuyenteId") REFERENCES "Contribuyente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_contribuyenteId_fkey" FOREIGN KEY ("contribuyenteId") REFERENCES "Contribuyente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePago" ADD CONSTRAINT "DetallePago_pagoId_fkey" FOREIGN KEY ("pagoId") REFERENCES "Pago"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retencion" ADD CONSTRAINT "Retencion_pagoId_fkey" FOREIGN KEY ("pagoId") REFERENCES "Pago"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleFactura" ADD CONSTRAINT "DetalleFactura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Impuesto" ADD CONSTRAINT "Impuesto_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE CASCADE ON UPDATE CASCADE;
