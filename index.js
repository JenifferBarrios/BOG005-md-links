const { buscarRutasMds, rutAbsoluta, leerTodosArchivos, validarLink } = require('./funciones.js');

const ruta = process.argv[2]; //módulo que permite capturar argumentos a través de la línea de comandos y se guarda como un array.


function mdLinks(pathUser, options = { validate: false }) {
    return new Promise((resolve, reject) => {
        const pathAbsolute = rutAbsoluta(pathUser) //se llaman con constante por que son sincronas
        const arrayMds = buscarRutasMds(pathAbsolute)
        if (options.validate == true) {
            leerTodosArchivos(arrayMds)
                .then((res) => validarLink(res))
                .then((res) => resolve(res)); // asincrornas
            
        } else {
        leerTodosArchivos(buscarRutasMds(rutAbsoluta(ruta)))
        .then((res) => resolve(res));
        }
    })
}

mdLinks(ruta, options = { validate: false }).then(res => (res)).catch(err => (err))
module.exports = {mdLinks}
//Estadisticas Links
const totalLink=(arrProp)=>{
    return {
      'Total': arrProp.length,
      'unique': new Set(arrProp.map((arrayobjetos)=>arrayobjetos.href)).size
    }
  }

mdLinks(ruta, (options = { validate: false }))
  .then((res) => totalLink(res))
  .then(res=>console.log('estado  del link',res))
  .catch((err) => err);

