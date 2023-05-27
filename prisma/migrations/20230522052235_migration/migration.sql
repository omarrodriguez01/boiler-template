-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "village_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "villages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "citizen_amount" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "characters_id_key" ON "characters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "villages_id_key" ON "villages"("id");

-- CreateIndex
CREATE UNIQUE INDEX "countries_id_key" ON "countries"("id");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_village_id_fkey" FOREIGN KEY ("village_id") REFERENCES "villages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "villages" ADD CONSTRAINT "villages_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
