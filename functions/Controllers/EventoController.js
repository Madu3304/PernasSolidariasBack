import { Evento } from "../Models/EventosModel.js"
import { sequelize } from "../Config/banco.js"
const evento = {}

function validarInscricao(dados) {
    const camposObrigatorios = [
        'nm_evento',  
        'distancia', 
        'dt_corrida', 
        'local_corrida'
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
            const { nm_evento,  distancia, dt_corrida, local_corrida} = req.body
            
            const dataEvento = new Date(dt_corrida);
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);

            if (dataEvento < hoje) {
                return res.status(400).json({ mensagem: "A data do evento não pode ser anterior à data atual." });
            }

            const novoEvento = await Evento.create({
                nm_evento: nm_evento,  
                distancia: distancia, 
                dt_corrida: dt_corrida, 
                local_corrida: local_corrida
            })
            
            res.send(novoEvento)
    } catch (error) {
        console.log(error)
        res.status(500).send({ mensagem: "Erro ao criar evento." });
    }
}


//UPDATE
evento.updateEvento = async(req, res) => {
    try {
            const { id_evento } = req.params
            const { nm_evento, distancia, dt_corrida, local_corrida} = req.body
            await Evento.update({
                nm_evento: nm_evento,  
                distancia: distancia, 
                dt_corrida: dt_corrida, 
                local_corrida: local_corrida
            }, 
        {where: {id_evento: id_evento}})
        
            const evento_atualizado = await Evento.findByPk(id_evento)
            res.send(evento_atualizado)

    } catch (error) {
        console.log(error)
    }
}

//DELETE
evento.deleteEvento = async(req, res) => {
    try {
            const {id_evento} = req.params
            await Evento.destroy({
                where: {id_evento: id_evento}
            })
            res.send({message: 'Corrida deletada'})
    } catch (error) {
        console.log(error)
    }
}

export{evento}