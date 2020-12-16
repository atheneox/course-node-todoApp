const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'create':
        let td = todo.create(argv.description);
        console.log(td);
        break;

    case 'list':
        let list = todo.getList();

        console.log(`<======== TODO LIST ========>`.green);
        for (let td of list) {
            console.log(`${ td.description }`);
            console.log(`Estado: `, td.complete);
            console.log(`\n`);
            console.log(`----------------------------`.green);
        }
        console.log(`============================`.green);
        break;

    case 'update':
        let up = todo.update(argv.description, argv.complete);
        if (up) {
            console.log(`valor actualizado correctamente`);
        } else {
            console.log(`no se ha podido actualizar`);
        }
        break;

    case 'delete':
        console.log(todo.drop(argv.description));
        break;

    default:
        console.log('comando no reconocido');

}