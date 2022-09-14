import { Router } from "express";
import { sendTodoList, addTodo, sendTodo, remTodo } from "../controllers/todos.controller.js";

const router = Router();

router.get('/todos', sendTodoList);

router.get('/todos/:id', sendTodo);

router.post('/add-todo', addTodo);

router.post('/rem-todo', remTodo);

export default router;
