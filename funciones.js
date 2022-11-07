//Leer una ruta 
const fs = require('fs');
const path = require("path");
const resolve = require('resolve')

const ruta = process.argv[2]; //módulo que permite capturar argumentos a través de la línea de comandos y se guarda como un array.
// console.log(path.isAbsolute(ruta)); //para evaluar cuando la ruta es absoluta
const evRuta = (path.isAbsolute(ruta));
const ingRuta = (path,ruta) => {
  if (ruta == " ") {
    alert("La ruta no existe")
  } else if(ruta == verdadero ) {
    //entrar al directorio
    
  }
  else {
    (ruta == falso)
    path.resolve(ruta)
  }
}
console.log (ingRuta)





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
