import request from 'supertest';
import express from 'express';
import { sequelize } from '../Config/banco.js';
import { router as CadeiranteRouter } from '../Routes/CadeiranteRoutes.js';

const app = express();
app.use(express.json());
app.use('/cadeirante', CadeiranteRouter);

// beforeAll(async () => {
//   await sequelize.sync({ force: true });
// });

afterAll(async () => {
  await sequelize.close();
});

describe('Testes de integração da rota /cadeirante', () => {
  it('Deve criar um novo cadeirante com sucesso', async () => {
    const resposta = await request(app)
      .post('/cadeirante/cadeirante')
      .send({
        nm_cadeirante: 'Joana Teste',
        cpf_cadeirante: '987.654.321-00',
        tamanho_blusa: 'G',
        s_n_cadeira: 'Sim'
      });

    expect(resposta.statusCode).toBe(200);
    expect(resposta.body).toHaveProperty('id_cadeirante');
    expect(resposta.body.nm_cadeirante).toBe('Joana Teste');
  });

  it('Deve retornar todos os cadeirantes', async () => {
    const resposta = await request(app).get('/cadeirante/cadeirante');
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});
