import express from 'express';
import cors from 'cors';

export const createServer = (port:number) =>{
    const app = express();
    app.use(cors())
    app.use(express.json())
    runServer(app, port)
    return app
}

const runServer = (app:any, port:number) =>{
    try{
        const server = app.listen(port, () => {
            console.log(`Connected successfully. Server running http://localhost:${port} `);
        });
        return server;
    } catch (error) {
        console.log(error);
    }

}