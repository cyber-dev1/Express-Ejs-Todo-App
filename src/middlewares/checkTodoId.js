import { ClientError, globalError } from "shokhijakhon-error-handler";

export const checkTodoId = async (req, res, next) => {
    try {
        let allTodos = await req.readFile("todos.json");
        if (!(allTodos.some(({ id }) => id == req.params.todoId))) throw new ClientError("Todos is not found", 404)
        return next();
    } catch (error) {
        return globalError(error, res)
    }
}