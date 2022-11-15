const { buscarRutasMds, rutAbsoluta, leerTodosArchivos } = require('./funciones.js');

const ruta = process.argv[2]; //módulo que permite capturar argumentos a través de la línea de comandos y se guarda como un array.


function mdLinks(pathUser, options = { validate: false }) {
    return new Promise((resolve, reject) => {
        const pathAbsolute = rutAbsoluta(pathUser)
        const arrayMds = buscarRutasMds(pathAbsolute)
         leerTodosArchivos(arrayMds).then(res=>resolve(res))
    })
}

mdLinks(ruta).then(res => console.log('resulltado de res en md-links: ', res))
