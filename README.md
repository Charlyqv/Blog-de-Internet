# React + Vite + SQL

Backend:

1.- Clonar el proyecto
2.- Ir al directorio "server"
3.- Ejecutar npm install mysql express cors nodemon
4.- Crear base de datos "blog"
5.- Crear tabla
  Estructura de la tabla:
  CREATE TABLE `entradas` (
    `id_entrada` int(11) NOT NULL AUTO_INCREMENT,
    `titulo` varchar(64) DEFAULT NULL,
    `autor` varchar(64) DEFAULT NULL,
    `fecha` date DEFAULT NULL,
    `contenido` varchar(264) DEFAULT NULL,
    PRIMARY KEY (`id_entrada`)
  ) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8
6.- Ejecutar nodemon index.js


Frontend:
1.- Ejectutar npm install
2.- Ejecutar las siguientes dependencias:
  -npm i @mui/material @emotion/react @emotion/styled
  -npm i @emotion/react
  -npm i @mui/icons-material
  -npm i react-redux
  -npm i sweetalert2
  -npm i @reduxjs/toolkit
  -npm install @emotion/styled @emotion/core @emotion/react --save
  -npm i date-fns
  -npm i react-modal
  -npm i react-datepicker
  -npm i axios
3.- Ejecutar npm run dev



