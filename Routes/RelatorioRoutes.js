import { listarRelatorios } from "../Controllers/RelatorioController.js"
import express from 'express'

const router = express.Router();

router.get('/relatorios', listarRelatorios.getlistarRelatorios)

export {router}