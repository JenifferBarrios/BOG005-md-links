const mockData = {
    pathUser: 'test\\probando.md',
    dataValidaFalso: [
    {
        href: 'https://majoledesm.github.io/apuntes/',
        text: 'https://majoledesm.github.io/apuntes/',
        file: 'C:\\Users\\LABORATORIA\\Desktop\\Proyectos\\Proyecto 4\\BOG005-md-links\\prueba\\file.md',       
        status: 404,
        mensaje: 'Fail'
      }
    ],

dataValidaVerdadero: [
    {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'https://developer.mozilla.org/es/docs/Web/JavaScri',
        file: 'C:\\Users\\LABORATORIA\\Desktop\\Proyectos\\Proyecto 4\\BOG005-md-links\\prueba\\file.md',
        status: 200,
        mensaje: 'ok'
      }
]
}
module.export = mockData