import { Relatorio, Cadeirante, Corredor } from "../Models/AssociacoesModel.js"
<<<<<<< HEAD
import { ExcelJS } from "exceljs"
import { express } from "express"

const app = express();
=======
import { sequelize } from "../Config/banco.js"
>>>>>>> 4f5967b04eae6b1d82ff29c97c2ca23fd0011015

const listarRelatorios = {}

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