import express from "express" ;
import { viewsController } from "../controllers/views.controller.js";


export const viewsRouter = express.Router() ;

viewsRouter.get('/', viewsController.GET);