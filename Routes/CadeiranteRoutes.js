import { cadeirante } from '../Controllers/CadeiranteController.js';

import express from 'express';

const router = express.Router();

router.get('/cadeirante', cadeirante.getCadeirante)
router.post('/cadeirante', cadeirante.createCadeirante)
router.put('/cadeirante', cadeirante.updateCadeirante)
router.delete('/cadeirante', cadeirante.deleteCadeirante)


export { router }