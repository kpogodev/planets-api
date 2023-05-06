import express from 'express';
import { getPlanets, getPlanetById } from '../controllers/planets';
import { requestQueryBuilder } from '../middlewares/requestQueryBuilder';

const router = express.Router();

router.route('/').get(requestQueryBuilder, getPlanets)
router.route('/:id').get(getPlanetById)

export default router;