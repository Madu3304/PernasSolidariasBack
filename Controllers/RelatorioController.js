import { Duplas, Cadeirante, Corredor } from "../Models/AssociacoesModel.js"
import express from "express"
import pkg from 'exceljs'
import { sequelize } from "../Config/banco.js"
const { ExcelJS } = pkg

const app = express();

const listarRelatorios = {}

listarRelatorios.getGraficoCadeirante = async(req, res)=>{
  try {
    const resultados = await sequelize.query(`
        SELECT c.nm_cadeirante AS nome, COUNT(*) AS qtd
        FROM relatorio r
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


listarRelatorios.getlistarRelatorios= async (req, res) => {
    try {
      const relatorios = await Relatorio.findAll({
        include: [
          { model: Cadeirante, as: "cadeirante", attributes: ["nomeCadeirante"] },
          { model: Corredor, as: "corredor", attributes: ["nomeCorredor"] }
        ]
      })
      res.json(relatorios)
    } catch (error) {
      console.error("Erro ao buscar relatórios:", error);
      res.status(500).json({ error: "Erro ao buscar relatórios" })
    }
  }

//editar
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

app.get('/exportar-usuarios', async (req, res) => {
const workbook = new ExcelJS.Workbook()
const worksheet = workbook.addWorksheet('Relatorio')

// Cabeçalho
worksheet.columns = [
  { header: 'Cadeirante', key: 'cadeirante', width: 30 },
  { header: 'Corredor', key: 'corredor', width: 30 },
]

// Dados das Relatorio (isso viria da RelatorioController, aqui é exemplo)
const Relatorio = [
  { cadeirante: 'Maria Eduarda', corredor: 'Ana Paula' },
  { cadeirante: 'José Silva', corredor: 'João Pedro' },
]

// Adiciona cada dupla como linha
Relatorio.forEach(dupla => worksheet.addRow(dupla))

// Configura a resposta para download do Excel
res.setHeader(
  'Content-Type',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
)
res.setHeader('Content-Disposition', 'attachment; filename=Relatorio.xlsx')

// Gera e envia o arquivo Excel
await workbook.xlsx.write(res)
res.end()
})

export { listarRelatorios }