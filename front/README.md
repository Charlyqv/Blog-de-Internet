# React + Vite + SQL

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Instalaciones que hice:
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


Estructura de la tabla:
CREATE TABLE `entradas` (
  `id_entrada` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(64) DEFAULT NULL,
  `autor` varchar(64) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `contenido` varchar(264) DEFAULT NULL,
  PRIMARY KEY (`id_entrada`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8
