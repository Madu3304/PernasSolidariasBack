const express = require("express");
const router = express.Router();
import { Grafico } from "../Models/GraficoModel.js";
 
router.get("/grafico", async (req, res) => {
  try {
    const dados = await db.Evento.findAll(); // ou o model  quer
    res.json(dados);
  } catch (error) {
    console.error("Erro ao buscar dados do gráfico:", error);
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
});

export {router}
