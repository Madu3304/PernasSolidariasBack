import { Cadeirante } from "../Models/CadeiranteModel.js"

const cadeirante = {} 

//GET
cadeirante.getCadeirante = async(req, res) => {
    try {
            const cadeirante = await Cadeirante.findAll()
            res.send(cadeirante)

    } catch (error) {
        console.log("Erro ao buscar esse cadeirante")
    }
}


export {cadeirante}