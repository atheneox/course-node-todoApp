const fs = require('fs');
let todoList = [];

const saveDB = () => {

    let data = JSON.stringify(todoList);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);

    })

}

const loadDB = () => {

    try {

        todoList = require('../db/data.json');

    } catch (error) {

        todoList = [];

    }

}

const create = (description) => {

    loadDB();

    let todo = {

        description,
        complete: false

    };

    todoList.push(todo);
    saveDB();
    return todo;

}

const getList = () => {

    loadDB();
    return todoList;

}

const update = (description, complete = true) => {

    loadDB();
    let index = todoList.findIndex(td => td.description === description);

    if (index >= 0) {

        todoList[index].complete = complete;
        saveDB();
        return true;

    } else {

        return false;

    }

}

const drop = (description) => {

    loadDB();
    let newTodoList = todoList.filter(td => td.description !== description);

    if (todoList.length === newTodoList.length) {

        return false;

    } else {

        todoList = newTodoList;
        saveDB();
        return true;

    }

}

module.exports = {
    create,
    getList,
    update,
    drop
}