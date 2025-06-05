import { listarDuplas } from "../Controllers/DuplasController.js"
import express from 'express'

const router = express.Router()

// router.get('/Duplas', listarDuplas.getlistarDuplas)
// router.get('/grafico-cadeirantes', listarDuplas.getGraficoCadeirante)

router.get('/duplas', listarDuplas)
router.get('duplas/listas', getlistarListas)
router.post('/duplas', createDupla)
router.put('/duplas/id:', updateDupla)
router.delete('/duplas/id:', deletelistarDuplas)

// import { getlistarDuplas, getGraficoCadeirante } from "../Controllers/RelatorioController.js"

// router.get('/Duplas', getlistarDuplas)
// router.get('/grafico-cadeirantes', getGraficoCadeirante)
// router.delete('/Duplas/:id', deletelistarDuplas);


export {router}