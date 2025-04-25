import fs from "node:fs/promises"
import { serverConfig } from "../config.js"

const {dbPath} = serverConfig;

export const model = (req, res, next) => {
    req.readFile = async (filename) => {
        let data = await fs.readFile(dbPath(filename), "utf-8") ;
        return data ? JSON.parse(data) : data ;
    };
    req.writeFile = async (filename, data) => {
        await fs.writeFile(dbPath(filename), JSON.stringify(data, null , 4)) ;
        return true;
    }
    return next() ;
}