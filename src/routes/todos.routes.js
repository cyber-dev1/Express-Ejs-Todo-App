import express from "express"
import todosControllers from "../controllers/todos.controllers.js";
import { todoValidator } from "../middlewares/todoValidator.js";
import { updateTodoValidator } from "../middlewares/updateTodoValidator.js";
import { checkTodoId } from "../middlewares/checkTodoId.js";

export const todosRoutes = express.Router() ;

todosRoutes.get("/", todosControllers.GET_TODOS) ;
todosRoutes.post('/create', todoValidator , todosControllers.CREATE_TODO) ;
todosRoutes.put('/update/:todoId', checkTodoId, updateTodoValidator, todosControllers.UPDATE_TODOS) ;
todosRoutes.delete('/delete/:todoId', checkTodoId , todosControllers.DELETE_TODOS) ;
