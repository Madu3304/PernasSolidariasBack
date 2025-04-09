import { Corredor } from "../Models/CorredorModel.js"

const corredor = {}

function validarInscricao(dados) {
    const camposObrigatorios = [
        'nomeCorredor', 
        'cpf', 
        'email', 
        'TamanhoBlusa'
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
corredor.getCorredor = async(req, res) => {
    try {
            const corredor = await Corredor.findAll()
            res.send(corredor)

    } catch (error) {
        console.log("Corredor não localizado")
    }
}


//CREATE
corredor.createCorredor = async(req, res) => {
    try {
            const { nomeCorredor, cpf, DataNascimento, email, TamanhoBlusa, Distancia } = req.body
            const novoCorredor = await Corredor.create({
                nomeCorredor: nomeCorredor, 
                cpf: cpf, 
                DataNascimento: DataNascimento, 
                email: email, 
                TamanhoBlusa: TamanhoBlusa, 
                Distancia: Distancia
            })
            res.send(novoCorredor)

    } catch (error) {
        console.log("Erro ao buscar corredor")
    }
}

corredor.updateCorredor = async(req, res) => {
    try {
            const {  id_corredor } = req.params
            const { nomeCorredor, cpf, DataNascimento, email, TamanhoBlusa, Distancia } = req.body
            await Corredor.update({
                nomeCorredor: nomeCorredor, 
                cpf: cpf, 
                DataNascimento: DataNascimento, 
                email: email, 
                TamanhoBlusa: TamanhoBlusa, 
                Distancia: Distancia
            },
            {Where: { id_corredor: id_corredor }})

             const corredor_atualizado = await Corredor.findByPk(id_corredor)
             res.send(corredor_atualizado)

        } catch (error) {
            console.log(error)   
    }
}

//DELETE
corredor.deleteCorredor = async(req, res) => {

    try {
        const { id_corredor} = req.params
        await Corredor.destroy({
            Where: { id_corredor: id_corredor}
        })

        res.send({message: 'Corredor deletado com sucesso'})
    } catch (error) {
        console.log(error)
    }
}


export { corredor }