import { cadeirante } from '../Controllers/CadeiranteController.js';
// import { cadeirante } from '../Controllers/CadeiranteController.js';
import express from 'express';

const router = express.Router();

router.get('cadeirante', cadeirante.getCadeirante)


export { router }