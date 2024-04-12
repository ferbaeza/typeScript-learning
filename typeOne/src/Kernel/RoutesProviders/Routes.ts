import express from 'express';
import {loginRoutes} from '../../Admin/Usuarios/Login/Routes/LoginRoutes';
import { pinsRoutes } from "../../Admin/Pins/Infrastructure/Routes/PinRoutes";
import { usuarioRoutes } from "../../Admin/Usuarios/Shared/Infrastructure/Routes/UsuarioRoutes";


const prefix = '/api';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World');
})

router.use(prefix, loginRoutes)
router.use(prefix, pinsRoutes)
router.use(prefix, usuarioRoutes)


export {router as RoutesRegister};