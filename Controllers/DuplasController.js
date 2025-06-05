import { Duplas, Cadeirante, Corredor } from "../Models/AssociacoesModel.js"
import express from "express"
import pkg from 'exceljs'
import { sequelize } from "../Config/banco.js";
const { ExcelJS } = pkg

const app = express();

const listarDuplas = {}

listarDuplas.getGraficoCadeirante = async(req, res)=>{
  try {
    const resultados = await sequelize.query(`
        SELECT c.nm_cadeirante AS nome, COUNT(*) AS qtd
        FROM Duplas r
        INNER JOIN cadeirante c ON c.id_cadeirante = r.id_cadeirante
        GROUP BY c.nm_cadeirante
        ORDER BY qtd DESC;
      `, {type: sequelize.QueryTypes.SELECT})

      res.json(resultados)
  } catch (error) {
    console.error('Erro ao tentar buscar dados do gráfico de cadeirantes:', error)
    res.status(500).send("Erro ao buscar dados do gráfico")
  }
}

const getlistarListas = async (req, res) => {
  try {
    const cadeirantes = await Cadeirante.findAll({ attributes: ['id', 'nome'] });
    const corredores = await Corredor.findAll({ attributes: ['id', 'nome'] });

    res.status(200).json({ cadeirantes, corredores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar listas' });
  }
};

const createDupla = async (req, res) => {
  const { cadeiranteId, corredorId } = req.body

  try {
    const novaDupla = await Dupla.create({ cadeiranteId, corredorId })

    res.status(201).json(novaDupla)
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensagem: 'Erro ao criar dupla' })
  }
}

const updateDupla = async (req, res) => {
  const { id } = req.params
  const { cadeiranteId, corredorId } = req.body

  try {
    const dupla = await Dupla.findByPk(id)
    if (!dupla) {
      return res.status(404).json({ mensagem: 'Dupla não encontrada' })
    }

    dupla.cadeiranteId = cadeiranteId
    dupla.corredorId = corredorId
    await dupla.save()

    res.status(200).json(dupla)
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensagem: 'Erro ao editar dupla' })
  }
}

listarDuplas.deletelistarDuplas = async (req, res) => {
    const { id } = req.params;
    try {
        const Dupla = await Dupla.findByPk(id);
        if (!Dupla) {
            return res.status(404).json({ error: "Relatório não encontrado" });
        }
        await Dupla.destroy();
        res.status(200).json({ message: "Relatório deletado com sucesso" });
    } catch (error) {
        console.error("Erro ao deletar relatório:", error);
        res.status(500).json({ error: "Erro ao deletar relatório" });
    }
};

  export { listarDuplas }                                                             