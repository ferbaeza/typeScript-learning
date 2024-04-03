import express from "express";
import Home from "../../Shared/Home/Home.route.js";
import UsuariosRoutes from "../../Src/Administracion/Usuarios/routes/Usuarios.routes.js";


const router = express.Router();

router.use('/', Home);
router.use('/api/usuarios', UsuariosRoutes);


export default router;
