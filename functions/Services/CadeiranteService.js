import { Cadeirante } from "../Models/CadeiranteModel.js"

const CadeiranteService = {
  // Listar todos os cadeirantes
  async listarTodos() {
    return await Cadeirante.findAll()
  },

  // Buscar por ID
  async buscarPorId(id) {
    return await Cadeirante.findByPk(id)
  },

  // Criar um novo cadeirante
  async criar(dados) {
    return await Cadeirante.create(dados)
  },

  // Atualizar um cadeirante
  async atualizar(id, dados) {
    await Cadeirante.update(dados, {
      where: { id_cadeirante: id }
    })

    return await Cadeirante.findByPk(id)
  },

  // Deletar um cadeirante
  async deletar(id) {
    return await Cadeirante.destroy({
      where: { id_cadeirante: id }
    })
  }
}

export { CadeiranteService }
