import { ClientError, globalError } from "shokhijakhon-error-handler"
import { createTodoValidatorSchema } from "../utils/todoValidatorSchema.js"

export const updateTodoValidator = (req, res, next) => {
    try {
        let validatorSchema = createTodoValidatorSchema(req.body) ;
        let validate = validatorSchema.validate(req.body) ;
        if(validate.error) throw new ClientError(validate.error.message, 400) ;
        return next();
    } catch (error) {
        return globalError(error, res)
    }
}