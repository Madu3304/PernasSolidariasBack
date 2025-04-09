import express from 'express'
import { buscarDadosGrafico } from "../Controllers/GraficoController.js"

const router = express.Router()

router.get('buscarDadosGrafico', getGrafico)

export {router}
