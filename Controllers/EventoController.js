import { Evento } from "../Models/EventosModel.js"
import { sequelize } from "../Config/banco.js"
const evento = {}

function validarInscricao(dados) {
    const camposObrigatorios = [
        'nomeEvento',  
        'distancia', 
        'dataCorrida', 
        'localCorrida'
    ];
  
    const camposPreencher = camposObrigatorios.filter(campo => {
      return !dados[campo] || dados[campo].toString().trim() === '';
    });
  
    if (camposPreencher.length > 0) {
      return {
        valido: false,
        mensagem: `Preencha os campos obrigatórios: ${camposPreencher.join(', ')}`
      };
    }
  
    return { valido: true };
  }

//GET
evento.getEvento = async(req, res) => {
    try {
            const evento = await Evento.findAll()
            res.send(evento)

    } catch (error) {
        console.log(error)
    }
}

//CREATE 
evento.createEvento = async (req, res) => {
    try {
            const { nomeEvento,  distancia, dataCorrida, localCorrida} = req.body
            const novoEvento = await Evento.create({
                nomeEvento: nomeEvento,  
                distancia: distancia, 
                dataCorrida: dataCorrida, 
                localCorrida: localCorrida
            })
            
            res.send(novoEvento)
    } catch (error) {
        console.log(error)
    }
}


//UPDATE
evento.updateEvento = async(req, res) => {
    try {
            const { id_Evento } = req.params
            const { nomeEvento, distancia, dataCorrida, localCorrida} = req.body
            await Evento.update({
                nomeEvento: nomeEvento,  
                distancia: distancia, 
                dataCorrida: dataCorrida, 
                localCorrida: localCorrida
            }, 
        {where: {id_Evento: id_Evento}})
        
            const evento_atualizado = await Evento.findByPk(id_Evento)
            res.send(evento_atualizado)

    } catch (error) {
        console.log(error)
    }
}

//DELETE
evento.deleteEvento = async(req, res) => {
    try {
            const {id_Evento} = req.params
            await Evento.destroy({
                where: {id_Evento: id_Evento}
            })
            res.send({message: 'Corrida deletada'})
    } catch (error) {
        console.log(error)
    }
}

export{evento}