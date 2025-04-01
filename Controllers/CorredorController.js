import { Corredor } from "../Models/CorredorModel.js"

const corredor = {}

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




export { Corredor }