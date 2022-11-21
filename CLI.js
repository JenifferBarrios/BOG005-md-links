const {mdLinks} = require('./index.js');
const {validarLink} = require('./funciones.js');
const ruta = process.argv[2];
const args = process.argv;
const {estadoLink} = require('./funciones.js')
const {totalLink} = require('./funciones.js')

const cli = () => {
  if (ruta === undefined){
    console.log("Ingresa una ruta")
  }else if(args.includes(--validate)){

  }
  
  else if(args.includes('--stats') && argv.includes('--validate')){
    (mdLinks(filePath, {validate:true}).then((res) => {console.log(statsAndValidateLinks(res))})))

  
  mdLinks(ruta,options = { validate: true })
  
}
}