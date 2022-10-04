// using the model
import Serie from '../models/Serie';
import { Request, Response } from 'express';

// creating a new document base on the model
const serieGOT = new Serie({
    name: 'juego de tronos',
    description: 'serie de tv basada en la saga de libros de george r.r. martin',
    chapters: '50'
})


const getAllSeries = async (req:Request, res:Response) => {
    const series = await Serie.find();
    res.json(series);
}

const getOneSerie = async (req:Request, res:Response) => {
    const serie = await Serie.findById(req.params.id);
    res.json(serie);
}
const updateSerie = async (req:Request, res:Response) => {
    try {
        await Serie.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: true,
            message: 'serie updated'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}
const createSerie = async (req:Request, res:Response) => {
    const serie = new Serie(req.body);
    try {
        await serie.save();
        res.status(200).json({
            status: true,
            message: 'serie created'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}

const deleteSeries = async (req:Request, res:Response) => {
    try {
        await Serie.deleteMany();
        res.status(200).json({
            status: true,
            message: 'series deleted'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}




export default {
    createSerie,
    deleteSeries,
    getAllSeries,
    getOneSerie,
    updateSerie
}

// tslint:disable-next-line:no-console
console.log('----->', serieGOT);
