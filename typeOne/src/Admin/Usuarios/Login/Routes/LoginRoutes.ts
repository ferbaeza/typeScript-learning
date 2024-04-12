import express from 'express';
import { login } from '../Infrastructure/Controllers/Login';

const router = express.Router();

router.post('/', login);

export {router as loginRoutes};
