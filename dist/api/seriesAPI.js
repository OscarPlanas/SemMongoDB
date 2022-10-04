"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seriesController_1 = __importDefault(require("../controller/seriesController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', seriesController_1.default.getAllSeries);
router.get('/:id', seriesController_1.default.getOneSerie);
router.post('/series', seriesController_1.default.createSerie);
router.delete('/series', seriesController_1.default.deleteSeries);
router.put('/:id', seriesController_1.default.updateSerie);
exports.default = router;
//# sourceMappingURL=seriesAPI.js.map