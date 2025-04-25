import Joi from "joi";

let todo_title = Joi.string().min(3).max(200).required().messages({
    "string.base": "Title must be a text string",
    "string.empty": "Title connot be empty",
    "string.min": "Title must be at least 3 characters long",
    "string.max": "Title must not exceed 200 characters",
    "any.required": "Title is required"
});
let todo_desc = Joi.string().min(3).max(600).required().messages({
    "string.base": "Description must be a text string",
    "string.empty": "Description connot be empty",
    "string.min": "Description must be at least 3 characters long",
    "string.max": "Description must not exceed 600 characters",
    "any.required": "Description is required"
});
let is_complate = Joi.boolean().valid(true, false).default(false).messages({
    "boolean.base": "Is complate must be a value boolean",
})

export const todoValidatorSchema = Joi.object({ todo_title, todo_desc , is_complate}) ;

export const createTodoValidatorSchema = (data) => {
    let obj = {} ;
    if('todo_title' in data) obj.todo_title = todo_title; 
    if('todo_desc' in data) obj.todo_desc = todo_desc; 
    if('is_complate' in data) obj.is_complate = is_complate; 
    return Joi.object(obj);
}