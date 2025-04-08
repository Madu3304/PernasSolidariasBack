import { Cadeirante } from "../Models/CadeiranteModel.js"

const cadeirante = {} 

function validarInscricao(dados) {
    const camposObrigatorios = [
        'nomeCadeirante', 
        'cpf', 
        'email', 
        'TamanhoBlusa', 
        'ComSemCadeira'
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
cadeirante.getCadeirante = async(req, res) => {
    try {
            const cadeirante = await Cadeirante.findAll()
            res.send(cadeirante)

    } catch (error) {
        console.log("Erro ao buscar esse cadeirante")
    }
}

//CREATE
cadeirante.createCadeirante = async (req, res) => {
    try {
            const { nomeCadeirante, cpf, DataNascimento, email, TamanhoBlusa, Distancia, ComSemCadeira} = req.body
            const novoCadeirante = await Cadeirante.create({
                nomeCadeirante: nomeCadeirante, 
                cpf: cpf, 
                DataNascimento: DataNascimento, 
                email: email, 
                TamanhoBlusa: TamanhoBlusa, 
                Distancia: Distancia, 
                ComSemCadeira: ComSemCadeira
            })
            res.send(novoCadeirante)

    } catch (error) {
        console.log(error)
    }
}

//UPDATE
cadeirante.updateCadeirante = async(req, res) => {
    try {
            const { id_cadeirante } = req.params
            const { nomeCadeirante, cpf, DataNascimento, email, TamanhoBlusa, Distancia, ComSemCadeira } = req.body
            await Cadeirante.update({
                nomeCadeirante: nomeCadeirante, 
                cpf: cpf, 
                DataNascimento: DataNascimento, 
                email: email, 
                TamanhoBlusa: TamanhoBlusa, 
                Distancia: Distancia, 
                ComSemCadeira: ComSemCadeira
            }, 
            {Where: { id_cadeirante: id_cadeirante}})

             const cadeirante_atualizado = await Cadeirante.findByPk(id_cadeirante)

             res.send(cadeirante_atualizado)

        } catch (error) {
            console.log(error)
        }
}

//DELETE
cadeirante.deleteCadeirante = async(req, res) => {
    try {
            const { id_cadeirante } = req.params
            await Cadeirante.destroy({Where: {id_cadeirante: id_cadeirante}})

            res.send({message: 'Cadeirante deletado'})
    } catch (error) {
        console.log(error)
    }
}

export {cadeirante}