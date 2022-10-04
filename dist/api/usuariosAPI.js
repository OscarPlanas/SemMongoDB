"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosController_1 = __importDefault(require("../controller/usuariosController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", usuariosController_1.default.getAllUsuarios);
router.get("/:id", usuariosController_1.default.getOneUsuario);
router.post("/usuarios", usuariosController_1.default.createUsuario);
router.delete("/usuarios", usuariosController_1.default.deleteUsuarios);
router.put("/:id", usuariosController_1.default.updateUsuario);
exports.default = router;
//# sourceMappingURL=usuariosAPI.js.map