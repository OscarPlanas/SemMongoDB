import usuariosController from "../controller/usuariosController";
import { Router } from "express";

const router = Router();

router.get("/", usuariosController.getAllUsuarios);
router.get("/:id", usuariosController.getOneUsuario);
router.post("/usuarios", usuariosController.createUsuario);
router.delete("/usuarios", usuariosController.deleteUsuarios);
router.put("/:id", usuariosController.updateUsuario);

export default router;
