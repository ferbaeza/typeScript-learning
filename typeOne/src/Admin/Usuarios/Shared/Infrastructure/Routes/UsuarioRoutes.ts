import express from 'express';


import { loginRoutes } from '../../../Login/Routes/LoginRoutes';

const router = express.Router();


router.use('/login', loginRoutes)


export { router as usuarioRoutes };
