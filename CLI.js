const {mdLinks} = require('./index.js');
const {validarLink} = require('./funciones.js');
const ruta = process.argv[2]
const args = process.argv

fs.stat( path, options, callback ) //sintaxis
const cli = (ruta,)
fs.stat("example_file.txt", (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log("Stats object for: example_file.txt");
      console.log(stats);
    
  