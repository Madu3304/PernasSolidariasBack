// import { listarRelatorios } from "../Controllers/RelatorioController.js"
// import express from 'express'

// const router = express.Router()

// router.get('/relatorio', listarRelatorios);

// export {router}

import express from "express";
import { listarRelatorios } from "../Controllers/RelatorioController.js";

const router = express.Router();

// Rota para obter o gráfico de cadeirantes
router.get("/grafico-cadeirantes", listarRelatorios.getGraficoCadeirante);

// Rota para obter o gráfico de cadeirantes
router.get("/grafico-corredores", listarRelatorios.getGraficoCorredor);

// Rota para obter o gráfico de cadeirantes
router.get("/grafico-eventos", listarRelatorios.getGraficoEvento);

// Rota para listar os relatórios
router.get("/listar", listarRelatorios.getlistarRelatorios);

export {router} 
