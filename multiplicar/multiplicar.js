const fs = require('fs'); //libreria de node
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('**********************'.green);
    console.log(`** tabla de ${base} **`.green);
    console.log('**********************'.green);
    for (let index = 0; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return; //evita q siga la ejecucion
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
                //console.log('El archivo ha sido creado!');
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}