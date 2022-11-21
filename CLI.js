const { mdLinks } = require('./index.js');
const { validarLink } = require('./funciones.js');
const ruta = process.argv[2];
const args = process.argv;
const { estadoLink } = require('./funciones.js')
const { totalLink } = require('./funciones.js')

const cli = (ruta, args) => {
  if (ruta === undefined) {
    console.log("Ingresa una ruta")
  } else if (args.includes('--stats') && args.includes('--validate')) {
    (mdLinks(ruta, { validate: true }).then((res) => {
      console.table(estadoLink(res))
    }))
  } else if (args.includes('--stats')) {
    (mdLinks(ruta, { validate: true }).then((res) => {
      console.table(totalLink(res))
    }))
  } else if (args.includes('--validate')){
    (mdLinks(ruta, { validate: true }).then((res) => {
      console.log((res))
    }))
  }else if (args!=('--stats')&& args!=('--validate')&& args!= undefined) {
    console.log("Tu comando no es Válido, intenta con : --validate,--stats o --stats --validate")
  }
}
cli(ruta,args)