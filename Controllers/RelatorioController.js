import { Relatorio, Cadeirante, Corredor } from "../Models/AssociacoesModel.js"
import express from "express"
import pkg from 'exceljs'
import { sequelize } from "../Config/banco.js";
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

app.get('/exportar-usuarios', async (req, res) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Usuários');
  // Cabeçalho
  worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Nome', key: 'nome', width: 30 },
    { header: 'Email', key: 'email', width: 30 },
  ];

  // Dados de exemplo (você pode pegar do banco)
  const usuarios = [
    { id: 1, nome: 'Maria Eduarda', email: 'maria@email.com' },
    { id: 2, nome: 'João Pedro', email: 'joao@email.com' },
  ];

  usuarios.forEach(usuario => worksheet.addRow(usuario));

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );
  res.setHeader('Content-Disposition', 'attachment; filename=usuarios.xlsx');

  await workbook.xlsx.write(res);
  res.end();
});


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