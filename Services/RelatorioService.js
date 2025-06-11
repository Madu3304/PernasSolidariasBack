import { Relatorio } from '../Models/RelatoriosModel.js';
import { Cadeirante } from '../Models/CadeiranteModel.js';
import { Corredor } from '../Models/CorredorModel.js';
import { Evento } from '../Models/EventosModel.js';

const RelatorioService = {
    async listarTodos() {
    return await Relatorio.findAll({
      include: [
        { model: Cadeirante, as: 'cadeirante' },
        { model: Corredor, as: 'corredor' },
        { model: Evento, as: 'evento' }
      ]
    });
  },

  async buscarPorId(id) {
    return await Relatorio.findByPk(id, {
      include: [
        { model: Cadeirante, as: 'cadeirante' },
        { model: Corredor, as: 'corredor' },
        { model: Evento, as: 'evento' }
      ]
    });
  },

  async criar(dados) {
    return await Relatorio.create(dados);
  },

  async atualizar(id, dados) {
    await Relatorio.update(dados, { where: { id_Relatorio: id } });
    return await Relatorio.findByPk(id);
  },

  async deletar(id) {
    return await Relatorio.destroy({ where: { id_Relatorio: id } });
  }
};

export { RelatorioService };
