import { ClientError, globalError } from "shokhijakhon-error-handler"
import { todoValidatorSchema } from "../utils/todoValidatorSchema.js";

export const todoValidator = (req, res, next) => {
    try {
        let newTodo = req.body;
        let validate = todoValidatorSchema.validate(newTodo, { abortEarly: false });
        if (validate.error) throw new ClientError(validate.error.message, 400);
        return next();
    } catch (error) {
        return globalError(error, res)
    }
}