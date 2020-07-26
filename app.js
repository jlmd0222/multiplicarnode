//requireds
//const fs = require('fs'); //libreria de node
//const fs = require('express'); //no es de node pero es un paquete q se instala
//const fs = require('./fs'); // son archivos q escribimos nosotros para el proyecto
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');

//let base = 9;
/* let data = "";

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado!');
}); */


//console.log(argv); //con este objeto podemos tener los parametros que se le peuden enviar para ejecutar la base desde la consola
//let parametro = argv[2]; // el 2 porq al ejecutar en consola el node app --base=5, estamos toamdno el --base=5 es como si fuera un arreglo
//let base = parametro.split('=')[1]; // hace un split de la variable y se toma la posicion 1 de ['--base' , '5']

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                var nameArc = `tabla-${argv.base}.txt`.green;
                console.log(`Archivo ${nameArc} creado`);
            }).catch((err) => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv.limite);