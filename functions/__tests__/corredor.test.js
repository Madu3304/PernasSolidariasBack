import request from 'supertest';
import express from 'express';
import { sequelize } from '../Config/banco.js';
import { router as CorredorRouter } from '../Routes/CorredorRoutes.js';

const app = express();
app.use(express.json());
app.use('/corredor', CorredorRouter);

// beforeAll(async () => {
//   await sequelize.sync({ force: true });
// });

afterAll(async () => {
  await sequelize.close();
});

describe('Testes de integração da rota /corredor', () => {
  it('Deve criar um novo corredor com sucesso', async () => {
    const resposta = await request(app)
      .post('/corredor/corredor')
      .send({
        nm_corredor: 'João Teste',
        cpf_corredor: '123.456.789-00',
        tamanho_blusa: 'M',
      });

    expect(resposta.statusCode).toBe(200);
    expect(resposta.body).toHaveProperty('id_corredor');
    expect(resposta.body.nm_corredor).toBe('João Teste');
  });

  it('Deve retornar todos os corredores', async () => {
    const resposta = await request(app).get('/corredor/corredor');
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});
