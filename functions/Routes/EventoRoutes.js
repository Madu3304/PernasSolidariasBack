import { evento } from "../Controllers/EventoController.js";
import express from 'express';
import { autenticarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.use(autenticarToken)

router.get('/evento', evento.getEvento)
router.post('/evento', evento.createEvento )
router.put('/evento', evento.updateEvento)
router.delete('/evento', evento.deleteEvento)

export{ router }