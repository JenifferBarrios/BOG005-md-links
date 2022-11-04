//Leer una ruta 
const fs = require('fs');
const path = require("path");

// const ruta = process.argv[2];
// console.log(path.isAbsolute(ruta));

fs.readFile(
  "C:/Users/LABORATORIA/Desktop/Proyectos/Proyecto 4/BOG005-md-links/funciones.js",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);
