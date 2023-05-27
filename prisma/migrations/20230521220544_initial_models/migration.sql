-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "ciudad" TEXT NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Artista" (
    "id_artista" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "genero_musical" TEXT NOT NULL,
    "fecha_inicio_carrera" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id_artista")
);

-- CreateTable
CREATE TABLE "Album" (
    "id_album" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "fecha_lanzamiento" TIMESTAMP(3) NOT NULL,
    "id_artista" INTEGER NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id_album")
);

-- CreateTable
CREATE TABLE "Cancion" (
    "id_cancion" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "duracion" TIMESTAMP(3) NOT NULL,
    "id_album" INTEGER NOT NULL,

    CONSTRAINT "Cancion_pkey" PRIMARY KEY ("id_cancion")
);

-- CreateTable
CREATE TABLE "ListaReproduccion" (
    "id_lista_reproduccion" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "ListaReproduccion_pkey" PRIMARY KEY ("id_lista_reproduccion")
);

-- CreateTable
CREATE TABLE "UsuarioArtistaSeguido" (
    "id_usuario" INTEGER NOT NULL,
    "id_artista" INTEGER NOT NULL,

    CONSTRAINT "UsuarioArtistaSeguido_pkey" PRIMARY KEY ("id_usuario","id_artista")
);

-- CreateTable
CREATE TABLE "CancionSeleccionada" (
    "id_cancion" INTEGER NOT NULL,
    "id_lista_reproduccion" INTEGER NOT NULL,

    CONSTRAINT "CancionSeleccionada_pkey" PRIMARY KEY ("id_cancion","id_lista_reproduccion")
);

-- CreateTable
CREATE TABLE "_CancionToListaReproduccion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CancionToListaReproduccion_AB_unique" ON "_CancionToListaReproduccion"("A", "B");

-- CreateIndex
CREATE INDEX "_CancionToListaReproduccion_B_index" ON "_CancionToListaReproduccion"("B");

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_id_artista_fkey" FOREIGN KEY ("id_artista") REFERENCES "Artista"("id_artista") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancion" ADD CONSTRAINT "Cancion_id_album_fkey" FOREIGN KEY ("id_album") REFERENCES "Album"("id_album") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaReproduccion" ADD CONSTRAINT "ListaReproduccion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioArtistaSeguido" ADD CONSTRAINT "UsuarioArtistaSeguido_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioArtistaSeguido" ADD CONSTRAINT "UsuarioArtistaSeguido_id_artista_fkey" FOREIGN KEY ("id_artista") REFERENCES "Artista"("id_artista") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancionSeleccionada" ADD CONSTRAINT "CancionSeleccionada_id_cancion_fkey" FOREIGN KEY ("id_cancion") REFERENCES "Cancion"("id_cancion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancionSeleccionada" ADD CONSTRAINT "CancionSeleccionada_id_lista_reproduccion_fkey" FOREIGN KEY ("id_lista_reproduccion") REFERENCES "ListaReproduccion"("id_lista_reproduccion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CancionToListaReproduccion" ADD CONSTRAINT "_CancionToListaReproduccion_A_fkey" FOREIGN KEY ("A") REFERENCES "Cancion"("id_cancion") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CancionToListaReproduccion" ADD CONSTRAINT "_CancionToListaReproduccion_B_fkey" FOREIGN KEY ("B") REFERENCES "ListaReproduccion"("id_lista_reproduccion") ON DELETE CASCADE ON UPDATE CASCADE;
