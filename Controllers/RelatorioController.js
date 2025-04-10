import { Relatorio, Cadeirante, Corredor } from "../Models/AssociacoesModel.js"
import { sequelize } from "../Config/banco.js"

const listarRelatorios = {}

listarRelatorios.getlistarRelatorios= async (req, res) => {
    try {
      const relatorios = await Relatorio.findAll({
        include: [
          { model: Cadeirante, as: "cadeirante", attributes: ["nomeCadeirante"] },
          { model: Corredor, as: "corredor", attributes: ["nomeCorredor"] }
        ]
      });
      res.json(relatorios);
    } catch (error) {
      console.error("Erro ao buscar relatórios:", error);
      res.status(500).json({ error: "Erro ao buscar relatórios" })
    }
  };
  
  export { listarRelatorios }                                                             