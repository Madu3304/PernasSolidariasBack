import express from 'express'
const router = express.Router()
import { Grafico } from "../Models/GraficoModel.js"
 
router.get("/grafico", async (req, res) => {
  try {
    const dados = await db.Evento.findAll()
    
    res.json(dados)

  } catch (error) {
    console.error("Erro ao buscar dados do gráfico:", error)
    res.status(500).json({ error: "Erro ao buscar dados" })
  }
})

export {router}
