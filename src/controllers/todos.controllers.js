import { globalError } from "shokhijakhon-error-handler";

class todosController {
    constructor() {
        this.GET_TODOS = async (req, res) => {
            try {
                let todos = await req.readFile("todos.json");
                return res.status(200).json(todos);
            } catch (error) {
                return globalError(error, res)
            }
        };
        this.CREATE_TODO = async (req, res) => {
            try {
                let todos = await req.readFile("todos.json");
                let newTodo = req.body;
                newTodo.id = todos.length ? todos.at(-1).id + 1 : 1;
                todos.push(newTodo);
                await req.writeFile("todos.json", todos);
                return res.status(201).json({message : "Todo successFully created", status : 201})
            } catch (error) {
                return globalError(error, res)
            }
        };
        this.UPDATE_TODOS = async (req, res) => {
            try {
                let allTodo = await req.readFile("todos.json");
                let { todoId } = req.params;
                let idx = allTodo.findIndex(({ id }) => id == todoId);
                allTodo[idx] = { ...allTodo[idx], ...req.body };
                await req.writeFile("todos.json", allTodo);
                return res.status(200).json({ message: "Todo successFully updated", status: 200 })
            } catch (error) {
                return globalError(error, res);
            }
        };
        this.DELETE_TODOS = async (req, res) => {
            try {
                let allData = await req.readFile("todos.json");
                let idx = allData.findIndex(({ id }) => id == req.params.todoId);
                allData.splice(idx, 1);
                await req.writeFile("todos.json", allData);
                return res.status(200).json({ message: "Todo successFully deleted", status: 200 })
            } catch (error) {
                return globalError(error, res)
            }
        };
    }
};

export default new todosController();