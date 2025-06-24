import { Grafico } from '../Models/GraficoModel.js';

const GraficoService = {
  async listarTodos() {
    return await Grafico.findAll();
  },

  async buscarPorId(id) {
    return await Grafico.findByPk(id);
  },

  async criar(dados) {
    return await Grafico.create(dados);
  },

  async atualizar(id, dados) {
    const grafico = await Grafico.findByPk(id);
    if (!grafico) {
      throw new Error('Dado do gráfico não encontrado');
    }
    await grafico.update(dados);
    return grafico;
  },

  async deletar(id) {
    const grafico = await Grafico.findByPk(id);
    if (!grafico) {
      throw new Error('Dado do gráfico não encontrado');
    }
    await grafico.destroy();
    return { mensagem: 'Dado do gráfico deletado com sucesso' };
  }
};

export { GraficoService };
