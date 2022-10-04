"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// using the model
const Usuario_1 = __importDefault(require("../models/Usuario"));
// creating a new document base on the model
const usuarioAdmin = new Usuario_1.default({
    username: 'admin',
    password: 'admin',
    name: 'admin'
});
const getAllUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield Usuario_1.default.find();
    res.json(usuarios);
});
const getOneUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield Usuario_1.default.findById(req.params.id);
    res.json(usuario);
});
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Usuario_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: true,
            message: 'usuario updated'
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = new Usuario_1.default(req.body);
    try {
        yield usuario.save();
        res.status(200).json({
            status: true,
            message: 'usuario created'
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});
const deleteUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Usuario_1.default.deleteMany();
        res.status(200).json({
            status: true,
            message: 'usuarios deleted'
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});
exports.default = {
    createUsuario,
    getAllUsuarios,
    getOneUsuario,
    updateUsuario,
    deleteUsuarios
};
// tslint:disable-next-line:no-console
console.log('----->', usuarioAdmin);
//# sourceMappingURL=usuariosController.js.map