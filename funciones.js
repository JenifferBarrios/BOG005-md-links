//Leer una ruta 
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const axios = require('axios');
// const resolve = require('resolve')

const ruta = process.argv[2]; //módulo que permite capturar argumentos a través de la línea de comandos y se guarda como un array.
// console.log(path.isAbsolute(ruta)); //para evaluar cuando la ruta es absoluta


//Comprobando si exite un path
function existePath(path) {
  const pathExiste = fs.existsSync(path);
  if (pathExiste) {

    return true;
  } else {
    console.error("La ruta no existe");
  }
}


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
// console.log(rutAbsoluta(ruta));
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
      // console.log(filtradoArchivo);
      if (fs.statSync(filtradoArchivo).isDirectory()) {
        subelemtos = subelemtos.concat(buscarRutasMds(filtradoArchivo));
        // console.log("Estos son subelementos", subelemtos);
      }
    })
    const archivoRuta = elementos
      .filter((elemento) => {
        const filtradoArchivo = path.join(ruta, elemento);
        const Archivomd =
          fs.statSync(filtradoArchivo).isFile() && path.extname(filtradoArchivo) === ".md";
        // console.log("filtrado", filtradoArchivo, Archivomd);
        return Archivomd;
      })
      .map((elemento) => {
        return path.join(ruta, elemento);
      });
    // console.log('ver los elementos del directorio: ', archivoRuta);
    return archivoRuta.concat(subelemtos);
  }

  return arrayMds;

};
// console.log(buscarRutasMds(rutAbsoluta(ruta)));

// Leer los archivos .md
function leerArchivo(archivoMD) {
  return new Promise((resolve, reject) => {
    let arrayLinks = []
    fs.readFile(archivoMD, 'utf-8', (err, data) => {
      if (err) {
        resolve(err);
      }
      
      // Extraer links 

      const renderer = new marked.Renderer()
      renderer.link = function (href, file, text) {
        const linkPropiedades = {
          'href': href,
          'text': text.split('').slice(0, 50).join(''),
          'file': archivoMD
        }

        if (linkPropiedades.href.includes('http')) {
          arrayLinks.push(linkPropiedades)
        }

      }
      marked.marked(data, { renderer })
      resolve(arrayLinks)
    })
    })
}
// leerArchivo('C:\\Users\\LABORATORIA\\Desktop\\Proyectos\\Proyecto 4\\BOG005-md-links\\prueba\\file.md').then(res=> console.log('la data es::::', res))

// console.log('ver sin en then: ', leerArchivo('C:\\Users\\LABORATORIA\\Desktop\\Proyectos\\Proyecto 4\\BOG005-md-links\\prueba\\file.md'))

function leerTodosArchivos(arrayMds) {
  let arrPromesas = []
  arrPromesas = arrayMds.map((archivoMD) => {
    return leerArchivo(archivoMD)
  })

  return Promise.all(arrPromesas).then(res => res)
}
leerTodosArchivos(buscarRutasMds(rutAbsoluta(ruta))).then(response => console.log('veeeeer: ', response));



