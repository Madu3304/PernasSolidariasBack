import { CadeiranteService } from "../Services/CadeiranteService.js"
import Joi from 'joi'

const cadeirante = {} 

function validarInscricao(dados) {
    const camposObrigatorios = [
        'nm_cadeirante', 
        'cpf_cadeirante'
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
// cadeirante.getCadeirante = async(req, res) => {
//     try {
//             const cadeirante = await Cadeirante.findAll()
//             res.send(cadeirante)

//     } catch (error) {
//         console.log("Erro ao buscar esse cadeirante")
//     }
// }

cadeirante.getCadeirante = async (req, res) => {
  try {
    const lista = await CadeiranteService.listarTodos();
    res.status(200).json(lista);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

//CREATE
// cadeirante.createCadeirante = async (req, res) => {

    //validação dos dados com a biblioteca "joi". 
    // const userSchema = Joi.object({
    //     nm_cadeirante: Joi.string().min(4).required(),
    //     cpf_cadeirante: Joi.string().required(),
    //     s_n_cadeira: Joi.string().required()
    // });

    // const { error } = userSchema.validate(req.body);

    // if (error) {
    //     return res.status(400).json({ erro: error.details[0].message });
    // }

//     try {
//             const { nm_cadeirante, cpf_cadeirante, tamanho_blusa, s_n_cadeira} = req.body
//             const novoCadeirante = await Cadeirante.create({
//                 nm_cadeirante: nm_cadeirante, 
//                 cpf_cadeirante: cpf_cadeirante, 
//                 tamanho_blusa: tamanho_blusa, 
//                 // distanciaCadeirante: distanciaCadeirante, 
//                 s_n_cadeira: s_n_cadeira
//             })
//             res.send(novoCadeirante)

//     } catch (error) {
//         console.log(error)
//     }
// }

cadeirante.createCadeirante = async (req, res) => {
  try {
    const novo = await CadeiranteService.criar(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

//UPDATE
// cadeirante.updateCadeirante = async(req, res) => {
//     try {
//             const { id_cadeirante } = req.params
//             const { nm_cadeirante, cpf_cadeirante, tamanho_blusa} = req.body
//             await Cadeirante.update({
//                 nm_cadeirante: nm_cadeirante, 
//                 cpf_cadeirante: cpf_cadeirante,  
//                 tamanho_blusa: tamanho_blusa, 
//                 // distanciaCadeirante: distanciaCadeirante
//             }, 
//             {Where: { id_cadeirante: id_cadeirante}})

//              const cadeirante_atualizado = await Cadeirante.findByPk(id_cadeirante)

//              res.send(cadeirante_atualizado)

//         } catch (error) {
//             console.log(error)
//         }
// }

cadeirante.updateCadeirante = async (req, res) => {
  try {
    const { id_cadeirante } = req.params;
    const atualizado = await CadeiranteService.atualizar(id_cadeirante, req.body);
    res.status(200).json(atualizado);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

//DELETE
// cadeirante.deleteCadeirante = async(req, res) => {
//     try {
//             const { id_cadeirante } = req.params
//             await Cadeirante.destroy({Where: {id_cadeirante: id_cadeirante}})

//             res.send({message: 'Cadeirante deletado'})
//     } catch (error) {
//         console.log(error)
//     }
// }

cadeirante.deleteCadeirante = async (req, res) => {
  try {
    const { id_cadeirante } = req.params;
    await CadeiranteService.deletar(id_cadeirante);
    res.status(200).json({ message: "Cadeirante deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

export {cadeirante}

// noovo
// const cadeirante = {};

// // GET
// cadeirante.getCadeirante = async (req, res) => {
//   try {
//     const lista = await CadeiranteService.listarTodos();
//     res.status(200).json(lista);
//   } catch (error) {
//     res.status(500).json({ erro: error.message });
//   }
// };

// // CREATE
// cadeirante.createCadeirante = async (req, res) => {
//   try {
//     const novo = await CadeiranteService.criar(req.body);
//     res.status(201).json(novo);
//   } catch (error) {
//     res.status(500).json({ erro: error.message });
//   }
// };

// // UPDATE
// cadeirante.updateCadeirante = async (req, res) => {
//   try {
//     const { id_cadeirante } = req.params;
//     const atualizado = await CadeiranteService.atualizar(id_cadeirante, req.body);
//     res.status(200).json(atualizado);
//   } catch (error) {
//     res.status(500).json({ erro: error.message });
//   }
// };

// // DELETE
// cadeirante.deleteCadeirante = async (req, res) => {
//   try {
//     const { id_cadeirante } = req.params;
//     await CadeiranteService.deletar(id_cadeirante);
//     res.status(200).json({ message: "Cadeirante deletado com sucesso" });
//   } catch (error) {
//     res.status(500).json({ erro: error.message });
//   }
// };

// export { cadeirante };