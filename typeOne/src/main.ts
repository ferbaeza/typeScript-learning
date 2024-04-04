
import { PORT } from './Kernel/Config/App'
import { createServer } from './Kernel/Server/Server';



const startApp = () =>{
    createServer(PORT);
    const hello = 'Hello, World!';
    console.log(hello, PORT);
}
startApp();


