import express from 'express';
import {loginRoutes} from '../../Admin/Login/Routes/LooginRoutes';
const prefix = '/api';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World');
})

router.use(prefix, loginRoutes)


export {router as RoutesRegister};