import { Evento } from "../Models/EventosModel.js"

const evento = {}

function validarInscricao(dados) {
    const camposObrigatorios = [
        'nomeEvento',  
        'Distancia', 
        'DataCorrida', 
        'LocalCorrida'
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
            const { nomeEvento,  Distancia, DataCorrida, LocalCorrida} = req.body
            const novoEvento = await Evento.create({
                nomeEvento: nomeEvento,  
                Distancia: Distancia, 
                DataCorrida: DataCorrida, 
                LocalCorrida: LocalCorrida
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
            const { nomeEvento, Distancia, DataCorrida, LocalCorrida} = req.body
            await Evento.update({
                nomeEvento: nomeEvento, 
                Distancia: Distancia, 
                DataCorrida: DataCorrida, 
                LocalCorrida: LocalCorrida
            }, 
        {Where: {id_Evento: id_Evento}})
        
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
                Where: {id_Evento: id_Evento}
            })
            res.send({message: 'Corrida deletada'})
    } catch (error) {
        console.log(error)
    }
}

export{evento}