import { createServer } from './Config/Server/server.js'
import dotenv from "dotenv";
dotenv.config();

const startApp = () => {
    const port = Number(process.env.PORT) | 3002;
    // console.log(process.env.DATABASE);
    createServer(port);
};
startApp();
