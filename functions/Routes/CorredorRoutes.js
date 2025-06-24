import { corredor } from "../Controllers/CorredorController.js";
import express from 'express';
import { autenticarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(autenticarToken)

router.get('/corredor', corredor.getCorredor)
router.post('/corredor', corredor.createCorredor)
router.put('/corredor', corredor.updateCorredor)
router.delete('/corredor', corredor.deleteCorredor)

export{ router}