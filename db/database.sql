CREATE DATABASE CRUD;
USE CRUD;

CREATE TABLE usuarios
(
    id SERIAL PRIMARY KEY,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    email Text NOT NULL,
    telefono varchar(30),
)

INSERT INTO usuarios
    (id,nombre,apellido,email,telefono)
VALUES
    ('oliver', 'charry', 'oliver@gmail.com', '312233233'),
    ('andre', 'ramirez', 'andrea@gmail.com', '3197949494')