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
const Serie_1 = __importDefault(require("../models/Serie"));
// creating a new document base on the model
const serieGOT = new Serie_1.default({
    name: 'juego de tronos',
    description: 'serie de tv basada en la saga de libros de george r.r. martin',
    chapters: '50'
});
const getAllSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const series = yield Serie_1.default.find();
    res.json(series);
});
const getOneSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serie = yield Serie_1.default.findById(req.params.id);
    res.json(serie);
});
const updateSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Serie_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: true,
            message: 'serie updated'
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});
const createSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serie = new Serie_1.default(req.body);
    try {
        yield serie.save();
        res.status(200).json({
            status: true,
            message: 'serie created'
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});
const deleteSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Serie_1.default.deleteMany();
        res.status(200).json({
            status: true,
            message: 'series deleted'
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
    createSerie,
    deleteSeries,
    getAllSeries,
    getOneSerie,
    updateSerie
};
// tslint:disable-next-line:no-console
console.log('----->', serieGOT);
//# sourceMappingURL=seriesController.js.map