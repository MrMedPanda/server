import todoModel from '../models/todos.model.js';

const addTodo = async (req, res) => {
    try {
        const todo = new todoModel(req.body);
        console.log(todo);
        await todo.save();
        res.json({ "Todo": todo, message: "Todo item hes been added." });
        console.log('Todo item has been added.');
    } catch (e) {
        res.status(500).json({ message: `Router error: ${e}` });
        console.log('Router error: ', e);
    }
};


const remTodo = async (req, res) => {
    try {
        const checkRem = await todoModel.findByIdAndRemove(req.body.id);
        if (checkRem) {
            res.json({ message: 'Todo has been removed.' });
        } else {
            res.json({ message: 'Todo not found.' });
            console.log('Todo not found.');
        }
    } catch (e) {
        console.log('Router error: ', e);
        res.status(500).json({ message: `Router error: ${e}` });
    }
};

const sendTodoList = async (req, res) => {
    const todoList = await todoModel.find({});

    try {
        if (todoList) {
            res.json({ "todoList": todoList });
        } else {
            res.json({ message: 'Todo not found.' });
            console.log('Todo not found.');
        }

    } catch (e) {
        console.log('Router error: ', e);
        res.status(500).json({ message: `Router error: ${e}` });
    }
};

const sendTodo = async (req, res) => {
    try {
        const todo = await todoModel.findById(req.params.id);
        if (todo) {
            res.json({ "todo": todo });
        } else {
            res.status(500).json({ message: 'Todo is not found!' });
            console.log('Todo is not found!');
        }

    } catch (e) {
        console.log('Router error: ', e);
        res.status(500).json({ message: 'Todo is not found!' });
    }
};

export { addTodo, sendTodoList, sendTodo, remTodo };
