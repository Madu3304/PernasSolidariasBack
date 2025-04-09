import { Cadeirante } from "../Models/CadeiranteModel.js"
import { Corredor } from "../Models/CorredorModel.js"
import { Grafico } from "../Models/GraficoModel.js"
import { Evento } from "../Models/EventosModel.js"
import { Sequelize } from "../Config/banco.js"

const buscarDadosGrafico = {}

buscarDadosGrafico.getGrafico= async (req, res) => {
  try {
    const corredores = await Grafico.findAll({
      attributes: ['id_corredor', [sequelize.fn('COUNT', 'id_corredor'), 'quantidade']],
      where: { id_corredor: { [Op.ne]: null } },
      group: ['id_corredor'],
      include: [{ model: Corredor, attributes: ['nomeCorredor'] }],
      order: [[sequelize.literal('quantidade'), 'DESC']],
      limit: 5
    })

    const cadeirantes = await Grafico.findAll({
      attributes: ['id_cadeirante', [sequelize.fn('COUNT', 'id_cadeirante'), 'quantidade']],
      where: { id_cadeirante: { [Op.ne]: null } },
      group: ['id_cadeirante'],
      include: [{ model: Cadeirante, attributes: ['nomeCadeirante'] }],
      order: [[sequelize.literal('quantidade'), 'DESC']],
      limit: 5
    })

    const eventos = await Grafico.findAll({
      attributes: ['id_evento', [sequelize.fn('COUNT', 'id_evento'), 'quantidade']],
      group: ['id_evento'],
      include: [{ model: Evento, attributes: ['nomeEvento'] }],
      order: [[sequelize.literal('quantidade'), 'DESC']],
      limit: 5
    })

    res.json({ corredores, cadeirantes, eventos })

  } catch (error) {
    console.error("Erro ao buscar dados do gráfico:", error)
    res.status(500).json({ error: "Erro ao buscar dados" })
  }
};

export { buscarDadosGrafico }
