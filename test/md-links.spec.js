const {mdLinks} = require('../index.js');
const {validarLink} = require('../funciones.js')
const {mockData} = require('./mockData.js')
const  {axios}  = require('axios');
jest.mock('axios');

describe('mdLinks', () => {
  it('Md-Links guarda los archivos .md y valida:true y retorna un array de objetos', () => {
    return mdLinks('test\\probando.md', options = { validate: true })
    .then((res) => {
      console.log(mockData.pathUser);
    expect(res).toEqual(mockData.dataValidaFalso)
    })
  });

});

// describe('mdLinks', () => {
//   it('Md-Links guarda los archivos .md y valida:true y retorna un array de objetos', () => {
//     return mdLinks(mockData.pathUser, options = { validate: true })
//     .then((res) => {
//     expect(res).toEqual(mockData.dataValidaVerdadero)
//     })
//   });

// });

// describe('validarLink', () => {
//   it('validarLink trae un array de objetos y retorna el estado de los link', () => {
//     expect(validarLink(mockData.dataValidaVerdadero)).toEqual(mockData.stats)
//   });

// });
