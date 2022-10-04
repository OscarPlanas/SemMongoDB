// using the model
import Usuario from '../models/Usuario';
import { Request, Response } from 'express';

// creating a new document base on the model
const usuarioAdmin = new Usuario({
    username: 'admin',
    password: 'admin',
    name: 'admin'
})

const getAllUsuarios = async (req:Request, res:Response) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

const getOneUsuario = async (req:Request, res:Response) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

const updateUsuario = async (req:Request, res:Response) => {
    try {
        await Usuario.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: true,
            message: 'usuario updated'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}

const createUsuario = async (req:Request, res:Response) => {
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(200).json({
            status: true,
            message: 'usuario created'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}

const deleteUsuarios = async (req:Request, res:Response) => {
    try {
        await Usuario.deleteMany();
        res.status(200).json({
            status: true,
            message: 'usuarios deleted'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}

export default {
    createUsuario,
    getAllUsuarios,
    getOneUsuario,
    updateUsuario,
    deleteUsuarios
}

// tslint:disable-next-line:no-console
console.log('----->', usuarioAdmin);
