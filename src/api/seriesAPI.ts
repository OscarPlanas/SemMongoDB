import seriesController from '../controller/seriesController';
import { Router } from 'express';

const router = Router();

router.get('/', seriesController.getAllSeries);
router.get('/:id', seriesController.getOneSerie);
router.post('/series', seriesController.createSerie);
router.delete('/series', seriesController.deleteSeries);
router.put('/:id', seriesController.updateSerie);

export default router;

