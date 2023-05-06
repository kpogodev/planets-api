import express from 'express';
import { getPlanets } from '../controllers/planets';
import { requestQueryBuilder } from '../middlewares/requestQueryBuilder';

const router = express.Router();

router.route('/').get(requestQueryBuilder, getPlanets)

export default router;