import { Evento } from '../Models/EventoModel.js';

const EventoService = {
  async listarTodos() {
    return await Evento.findAll();
  },

  async buscarPorId(id) {
    return await Evento.findByPk(id);
  },

  async criar(dados) {
    return await Evento.create(dados);
  },

  async atualizar(id, dados) {
    const evento = await Evento.findByPk(id);
    if (!evento) {
      throw new Error('Evento não encontrado');
    }
    await evento.update(dados);
    return evento;
  },

  async deletar(id) {
    const evento = await Evento.findByPk(id);
    if (!evento) {
      throw new Error('Evento não encontrado');
    }
    await evento.destroy();
    return { mensagem: 'Evento deletado com sucesso' };
  }
};

export { EventoService };
