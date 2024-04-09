
import { PORT } from './Kernel/Config/App'
import { createServer } from './Kernel/Server/Server';
import { connect, disconnect } from '../src/Kernel/DataBase/MongoDataBase';




const startApp = () =>{
    connect()
    createServer(PORT);
}
startApp();


