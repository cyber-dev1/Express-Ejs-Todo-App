import express from "express" ;
import { todosRoutes } from "./todos.routes.js";


export const mainRouter = express.Router() ;

mainRouter.use("/todos", todosRoutes)