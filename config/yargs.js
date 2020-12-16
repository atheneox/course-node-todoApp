const description = {
    demand: true,
    alias: 'd',
    desc: 'to do description'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'mark todo as complete or pending'
}

const argv = require('yargs')
    .command('create', 'create to do', {
        description
    })
    .command('update', 'update to do item', {
        description,
        completed
    })
    .command('list', 'to do list')
    .command('delete', 'delete to do', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}