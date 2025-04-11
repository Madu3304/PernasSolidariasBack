// const express = require('express');
// const Joi = require('joi'); // importa o Joi

// const app = express();
// app.use(express.json());

// // Schema de validação
// const userSchema = Joi.object({
//   nome: Joi.string().min(3).required(),
//   email: Joi.string().email().required(),
//   senha: Joi.string().min(6).required()
// });

// app.post('/usuarios', (req, res) => {
//   const { error, value } = userSchema.validate(req.body);

//   if (error) {
//     // Retorna erro de validação
//     return res.status(400).json({ erro: error.details[0].message });
//   }

//   // Se passou na validação
//   res.status(201).json({ mensagem: 'Usuário criado com sucesso!', dados: value });
// });

// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });
