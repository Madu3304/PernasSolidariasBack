import { Corredor } from '../Models/CorredorModel.js';

const CorredorService = {
  async listarTodos() {
    return await Corredor.findAll();
  },

  async buscarPorId(id) {
    return await Corredor.findByPk(id);
  },

  async criar(dados) {
    return await Corredor.create(dados);
  },

  async atualizar(id, dados) {
    const corredor = await Corredor.findByPk(id);
    if (!corredor) {
      throw new Error('Corredor não encontrado');
    }
    await corredor.update(dados);
    return corredor;
  },

  async deletar(id) {
    const corredor = await Corredor.findByPk(id);
    if (!corredor) {
      throw new Error('Corredor não encontrado');
    }
    await corredor.destroy();
    return { mensagem: 'Corredor deletado com sucesso' };
  }
};

export { CorredorService };
