import { Duplas } from '../Models/DuplasModel.js';

const DuplasService = {
  async listarTodos() {
    return await Duplas.findAll();
  },

  async buscarPorId(id) {
    return await Duplas.findByPk(id);
  },

  async criar(dados) {
    return await Duplas.create(dados);
  },

  async atualizar(id, dados) {
    const dupla = await Duplas.findByPk(id);
    if (!dupla) {
      throw new Error('Dupla não encontrada');
    }
    await dupla.update(dados);
    return dupla;
  },

  async deletar(id) {
    const dupla = await Duplas.findByPk(id);
    if (!dupla) {
      throw new Error('Dupla não encontrada');
    }
    await dupla.destroy();
    return { mensagem: 'Dupla deletada com sucesso' };
  }
};

export { DuplasService };
