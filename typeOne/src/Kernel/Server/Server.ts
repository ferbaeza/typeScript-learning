import express from 'express';
import cors from 'cors';
import { connect, disconnect } from '../DataBase/MongoDataBase';
import {RoutesRegister} from '../RoutesProviders/Routes';


export const createServer = (port:number) =>{
    const app = express();
    app.use(cors())
    app.use(express.json())

    app.use('/', RoutesRegister)

    runServer(app, port)
    return app
}

const runServer = (app:any, port:number) =>{
    try{
        const server = app.listen(port, () => {
            console.log(`Server created and running http://localhost:${port} `);
        });
        return server;
    } catch (error) {
        console.log(error);
    }

}