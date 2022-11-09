//Leer una ruta 
const fs = require('fs');
const path = require("path");
// const resolve = require('resolve')

const ruta = process.argv[2]; //módulo que permite capturar argumentos a través de la línea de comandos y se guarda como un array.
// console.log(path.isAbsolute(ruta)); //para evaluar cuando la ruta es absoluta


//Comprobando si exite un path
function existePath(path) {
  const pathExiste = fs.existsSync(path);
  if (!pathExiste) {
    console.error("la ruta no existe");
    return;
  }
}
console.log(existePath(path));

//evaluarRuta= evaluando la ruta, si es absoluta o relativa
const rutAbsoluta = (mypath) => {
  const evaluarRuta = path.isAbsolute(mypath);
  if (!evaluarRuta) {
    const convRuta = path.resolve(mypath); //convirtiendo la ruta
    return convRuta;
  }
  const convRuta = mypath;
  return convRuta;
}
console.log(rutAbsoluta(ruta));
// Buscando archivos .md
const buscarRutasMds = (ruta) => {
  let arrayMds = [];
  if (fs.statSync(ruta).isFile() && path.extname(ruta) === ".md") {
    arrayMds.push(ruta);
  } else if (fs.statSync(ruta).isFile() && path.extname(ruta) !== ".md") {
    console.log("este no es un archivo md");
  } else {
    const elementos = fs.readdirSync(ruta);
    let subelemtos = [];
    elementos.forEach((elemento) => {
      const filtradoArchivo = path.join(ruta, elemento);
      console.log(filtradoArchivo);
      if (fs.statSync(filtradoArchivo).isDirectory()) {
        subelemtos = subelemtos.concat(buscarRutasMds(filtradoArchivo));
        console.log("estos es subelemento", subelemtos);
      }
    })
    const archivoRuta = elementos
      .filter((elemento) => {
        const filtradoArchivo = path.join(ruta, elemento);
        const Archivomd =
          fs.statSync(filtradoArchivo).isFile() &&
          path.extname(filtradoArchivo) === ".md";
        console.log("filtrado", filtradoArchivo, Archivomd);
        return Archivomd;
      })
      .map((elemento) => {
        return path.join(ruta, elemento);
      });
    //console.log('ver los elementos del directorio: ', archivoRuta);
    return archivoRuta.concat(subelemtos);
  }
  console.log(arrayMds);
  return arrayMds;
};
console.log(
  "ver los elementos del directorio: ",
  buscarRutasMds(rutAbsoluta(ruta))
);







// fs.readFile(
//   "C:/Users/LABORATORIA/Desktop/Proyectos/Proyecto 4/BOG005-md-links/funciones.js",
//   "utf8",
//   (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   }
// );
