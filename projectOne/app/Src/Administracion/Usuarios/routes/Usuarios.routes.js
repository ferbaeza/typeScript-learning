import express from "express";
import { listarUsuarios, listarUsuario, editarUsuario, eliminarUsuario, crearUsuario } from "../controllers/Usuarios.controller.js";

const router = express.Router();

router.get('/', listarUsuarios);
router.get('/:id', listarUsuario);
router.put("/:id", editarUsuario);
router.delete("/:id", eliminarUsuario);
router.post("/", crearUsuario);

export default router;