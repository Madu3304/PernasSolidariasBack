import { listarRelatorios } from "../Controllers/RelatorioController.js"
import express from 'express'

const router = express.Router()

router.get('/relatorios', listarRelatorios.getlistarRelatorios)
router.get('/grafico-cadeirantes', listarRelatorios.getGraficoCadeirante)

// import { getlistarRelatorios, getGraficoCadeirante } from "../Controllers/RelatorioController.js"

// router.get('/relatorios', getlistarRelatorios)
// router.get('/grafico-cadeirantes', getGraficoCadeirante)
// router.delete('/relatorios/:id', deletelistarRelatorios);


export {router}