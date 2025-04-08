import { corredor } from "../Controllers/CorredorController.js";
import express from 'express';

const router = express.Router();

router.get('corredor', corredor.getCorredor)
router.post('corredor', corredor.createCorredor)
router.put('corredor', corredor.updateCorredor)
router.delete('corredor', corredor.deleteCorredor)

export{ router}