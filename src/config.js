import {config} from "dotenv"
import path from "node:path"
config();

export const serverConfig = {
    PORT : process.env.PORT || 4000,
    dbPath : (filename) =>  path.join(process.cwd(), "db", filename) 
}