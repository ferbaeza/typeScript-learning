import 'dotenv/config'
import { Client, Pool, QueryResult } from 'pg'
import { DB_PASSWORD ,DB_DATABASE} from './enviroment'
import { handlerError } from "../utils/errorHandler";


const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: DB_DATABASE, //process.env.DB_DATABASE,
  password: DB_PASSWORD, //process.env.DB_PASSWORD,
  port: 5432,
});




const client = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: DB_DATABASE, //process.env.DB_DATABASE,
  password: DB_PASSWORD, //process.env.DB_PASSWORD,
  port: 5432,
});

export const database = ()=>{
    const connect = () =>{
        try {
            async function connect():Promise<void> {
                await client.connect();
            }
        } catch (error) {
            handlerError(500, "Error en getAllItems ");

        }
    }
    const disconnect = () =>{
        try {
            async function endConnection(): Promise<void> {
                await client.end();
            }
        } catch (error) {
            
        }
    }
    return { connect, disconnect}
}

// async function connect():Promise<void> {
//     await client.connect();
// }


// async function getTest():Promise<number>{
//     const res = await client.query("SELECT * from test");
//     const count =res.rowCount
//     return count
// }

// export {connect, endConnection}