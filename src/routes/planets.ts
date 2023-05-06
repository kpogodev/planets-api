import express from 'express';
import { getPlanets, getPlanetById, createPlanet } from '../controllers/planets';
import { requestQueryBuilder } from '../middlewares/requestQueryBuilder';

const router = express.Router();

router.route('/').get(requestQueryBuilder, getPlanets).post(createPlanet);
router.route('/:id').get(getPlanetById)

export default router;