-- Creación de la tabla Películas
CREATE TABLE Peliculas (
  id_pelicula INT PRIMARY KEY,
  titulo VARCHAR(255),
  genero VARCHAR(255),
  duracion INT,
  clasificacion VARCHAR(50),
  director VARCHAR(255),
  sinopsis TEXT
);

-- Creación de la tabla Salas
CREATE TABLE Salas (
  id_sala INT PRIMARY KEY,
  nombre VARCHAR(255),
  capacidad INT
);

-- Creación de la tabla Funciones
CREATE TABLE Funciones (
  id_funcion INT PRIMARY KEY,
  id_pelicula INT,
  id_sala INT,
  fecha DATE,
  hora TIME,
  FOREIGN KEY (id_pelicula) REFERENCES Peliculas(id_pelicula),
  FOREIGN KEY (id_sala) REFERENCES Salas(id_sala)
);

-- Creación de la tabla Usuarios
CREATE TABLE Usuarios (
  id_usuario INT PRIMARY KEY,
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  correo VARCHAR(255),
  contraseña VARCHAR(255),
  tarjeta_credito VARCHAR(16)
);

-- Creación de la tabla Boletos
CREATE TABLE Boletos (
  id_boleto INT PRIMARY KEY,
  id_funcion INT,
  id_usuario INT,
  cantidad INT,
  total DECIMAL(10, 2),
  FOREIGN KEY (id_funcion) REFERENCES Funciones(id_funcion),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
