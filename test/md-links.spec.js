const {mdLinks} = require('../index.js');
const {validarLink} = require('../funciones.js')
const {mockData} = require('./mockData.js')
const  {axios}  = require('axios')
jest.mock('axios');

describe("mdLinks", () => {
//   describe("mdLinks", () => {
  it("Md-Links guarda los archivos .md y valida:true y retorna un array de objetos", async (done) => {
    expect(await(mdLinks("test\\probando.md", (options = { validate: true }))).resolve.toEqual(mockData.dataValidaVerdadero),done())})
   })
   it('Debería validar el estado de los links rechazados', (done) => {
    axios.get.mockRejectedValue('Please,check the link')
   })