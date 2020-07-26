const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', opts)
    .command('crear', 'Crea un arhcivo con la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}