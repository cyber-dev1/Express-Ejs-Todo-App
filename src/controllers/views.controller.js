import express from "express" ;
import { globalError } from "shokhijakhon-error-handler";

export const viewsController = {
    GET : async (req, res) => {
        let allTodos = await req.readFile("todos.json")
        try {
            return res.render("index", {todos : allTodos })
        } catch (error) {
            return globalError(error, res)
        }
    }
}