import request from 'supertest';
import express from 'express';
import { sequelize } from '../Config/banco.js';
import { router as EventoRouter } from '../Routes/EventoRoutes.js';
// import { router as EventoRouter } from '../Routes/eventoRoutes.js';

const app = express();
app.use(express.json());
app.use('/evento', EventoRouter);

// beforeAll(async () => {
//   await sequelize.sync({ force: true });
// });

afterAll(async () => {
  await sequelize.close();
});

describe('Testes de integração da rota /evento', () => {
  it('Deve criar um novo evento com sucesso', async () => {
    const resposta = await request(app)
      .post('/evento/evento')
      .send({
        nm_evento: 'Corrida da Paz',
        distancia: 5000,
        dt_corrida: '2025-12-15',
        local_corrida: 'Praça Central',
      });

    expect(resposta.statusCode).toBe(200);
    expect(resposta.body).toHaveProperty('id_evento');
    expect(resposta.body.nm_evento).toBe('Corrida da Paz');
  });

  it('Deve retornar todos os eventos', async () => {
    const resposta = await request(app).get('/evento/evento');
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
    expect(resposta.body.length).toBeGreaterThan(0);
  });
});
