import express from "express"
import { sequelize } from "./Config/banco.js"
import cors from 'cors'
import { Cadeirante } from "./Models/CadeiranteModel.js"
import { Corredor } from "./Models/CorredorModel.js"
import { Evento } from "./Models/EventosModel.js"
import { Relatorio } from "./Models/RelatoriosModel.js"
import { Duplas } from "./Models/DuplasModel.js"
import { Usuario } from "./Models/UsuarioModel.js"
 

import { router as CadeiranteRouter } from "./Routes/CadeiranteRoutes.js"
import { router as CorredorRouter } from "./Routes/CorredorRoutes.js"
import { router as EventoRouter} from "./Routes/EventoRoutes.js"
import { router as GraficoRouter } from "./Routes/GraficoRoutes.js"
import { router as DuplasRouter } from "./Routes/DuplasRoutes.js"
import { router as RelatorioRoutes } from "./Routes/RelatoriosRoutes.js"
import { router as AuthRouter } from "./Routes/AuthRoutes.js";

const app = express()
// const PORT = process.env.PORT || 8080
const port = 3000

const insercao = async () => {
    

    await Cadeirante.bulkCreate([
        {nm_cadeirante: 'Luiz Cadeirante', cpf_cadeirante: '111.111.111-11', tamanho_blusa: 'gg', s_n_cadeira: 'Sim'},
        {nm_cadeirante: 'Maria Cadeirante', cpf_cadeirante: '222.222.222-22', tamanho_blusa: 'm', s_n_cadeira: 'Não' },
        {nm_cadeirante: 'João Cadeirante', cpf_cadeirante: '333.333.333-33', tamanho_blusa: 'g', s_n_cadeira: 'Sim'},
        {nm_cadeirante: 'Ana Cadeirante', cpf_cadeirante: '333.333.333-33', tamanho_blusa: 'p', s_n_cadeira: 'Sim'},
        {nm_cadeirante: 'Carlos Cadeirante', cpf_cadeirante: '333.333.333-33', tamanho_blusa: 'm', s_n_cadeira: 'Não'},
        { nm_cadeirante: 'João da Silva', cpf_cadeirante: '333.333.333-33', tamanho_blusa: 'g', s_n_cadeira: 'Sim' },
        { nm_cadeirante: 'Ana Beatriz', cpf_cadeirante: '444.444.444-44', tamanho_blusa: 'p', s_n_cadeira: 'Não' },
        { nm_cadeirante: 'Carlos Henrique', cpf_cadeirante: '555.555.555-55', tamanho_blusa: 'gg', s_n_cadeira: 'Sim' },
        { nm_cadeirante: 'Fernanda Souza', cpf_cadeirante: '666.666.666-66', tamanho_blusa: 'm', s_n_cadeira: 'Sim' },
        { nm_cadeirante: 'Ricardo Lopes', cpf_cadeirante: '777.777.777-77', tamanho_blusa: 'g', s_n_cadeira: 'Não' },
        { nm_cadeirante: 'Juliana Lima', cpf_cadeirante: '888.888.888-88', tamanho_blusa: 'p', s_n_cadeira: 'Não' },
        { nm_cadeirante: 'Paulo César', cpf_cadeirante: '999.999.999-99', tamanho_blusa: 'gg', s_n_cadeira: 'Sim' },
        { nm_cadeirante: 'Tatiane Rocha', cpf_cadeirante: '000.000.000-00', tamanho_blusa: 'm', s_n_cadeira: 'Não' },
        { nm_cadeirante: 'André Mendes', cpf_cadeirante: '123.456.789-00', tamanho_blusa: 'g', s_n_cadeira: 'Sim' },
        { nm_cadeirante: 'Camila Ferreira', cpf_cadeirante: '321.654.987-00', tamanho_blusa: 'p', s_n_cadeira: 'Sim' },
        { nm_cadeirante: 'Luciano Barros', cpf_cadeirante: '147.258.369-00', tamanho_blusa: 'gg', s_n_cadeira: 'Não' },
        { nm_cadeirante: 'Patrícia Gomes', cpf_cadeirante: '963.852.741-00', tamanho_blusa: 'm', s_n_cadeira: 'Sim' },

    ])

    await Corredor.bulkCreate([
        {nm_corredor: 'Luiz Corredor', cpf_corredor: '111.111.111-11', tamanho_blusa: 'GG'},
        {nm_corredor: 'Maria Corredora', cpf_corredor: '111.111.111-11', tamanho_blusa: 'GG'},
        {nm_corredor: 'Pedro Corredor', cpf_corredor: '111.111.111-11', tamanho_blusa: 'P'},
        {nm_corredor: 'Juliana Corredora', cpf_corredor: '111.111.111-11', tamanho_blusa: 'M'},
        {nm_corredor: 'Fernanda Corredora', cpf_corredor: '111.111.111-11', tamanho_blusa: 'G'},
        { nm_corredor: 'Carlos Corredor', cpf_corredor: '111.111.111-11', tamanho_blusa: 'M' },
        { nm_corredor: 'Ana Corredora', cpf_corredor: '111.111.111-11', tamanho_blusa: 'P' },
        { nm_corredor: 'João Corredor', cpf_corredor: '111.111.111-11', tamanho_blusa: 'G' },
        { nm_corredor: 'Beatriz Corredora', cpf_corredor: '111.111.111-11', tamanho_blusa: 'GG' },
        { nm_corredor: 'Rafael Corredor', cpf_corredor: '111.111.111-11', tamanho_blusa: 'M' },
        { nm_corredor: 'Camila Corredora', cpf_corredor: '111.111.111-11', tamanho_blusa: 'P' },
        { nm_corredor: 'Tiago Corredor', cpf_corredor: '222.222.222-22', tamanho_blusa: 'G' },
        { nm_corredor: 'Larissa Corredora', cpf_corredor: '222.222.222-22', tamanho_blusa: 'GG' },
        { nm_corredor: 'Bruno Corredor', cpf_corredor: '222.222.222-22', tamanho_blusa: 'M' },
        { nm_corredor: 'Patrícia Corredora', cpf_corredor: '222.222.222-22', tamanho_blusa: 'P' },
    ])

    await Evento.bulkCreate([
        {nm_evento: 'Corrida A', distancia: 10, dt_corrida: '2025-05-13', local_corrida: 'Joinville'},
        {nm_evento: 'Corrida B', distancia: 10, dt_corrida: '2025-05-13', local_corrida: 'Joinville'},
        {nm_evento: 'Corrida C', distancia: 5, dt_corrida: '2025-06-10', local_corrida: 'Florianópolis'},
        {nm_evento: 'Corrida D', distancia: 15, dt_corrida: '2025-06-20', local_corrida: 'Blumenau'},
        {nm_evento: 'Corrida E', distancia: 8, dt_corrida: '2025-07-01', local_corrida: 'Curitiba'},
        { nm_evento: 'Corrida F', distancia: 10, dt_corrida: '2025-07-15', local_corrida: 'São José' },
        { nm_evento: 'Corrida G', distancia: 5, dt_corrida: '2025-08-03', local_corrida: 'Lages' },
        { nm_evento: 'Corrida H', distancia: 12, dt_corrida: '2025-08-17', local_corrida: 'Criciúma' },
        { nm_evento: 'Corrida I', distancia: 7, dt_corrida: '2025-09-01', local_corrida: 'Balneário Camboriú' },
        { nm_evento: 'Corrida J', distancia: 15, dt_corrida: '2025-09-21', local_corrida: 'Chapecó' },
        { nm_evento: 'Corrida K', distancia: 6, dt_corrida: '2025-10-05', local_corrida: 'Itajaí' },
        { nm_evento: 'Corrida L', distancia: 10, dt_corrida: '2025-10-19', local_corrida: 'Jaraguá do Sul' },
        { nm_evento: 'Corrida M', distancia: 8, dt_corrida: '2025-11-02', local_corrida: 'São Bento do Sul' },
        { nm_evento: 'Corrida N', distancia: 5, dt_corrida: '2025-11-16', local_corrida: 'Gaspar' },
        { nm_evento: 'Corrida O', distancia: 14, dt_corrida: '2025-12-01', local_corrida: 'Pomerode' },
    ])

    await Relatorio.bulkCreate([
        {id_cadeirante: 1, id_corredor: 1, id_evento: 1},
        {id_cadeirante: 2, id_corredor: 2, id_evento: 2},
        {id_cadeirante: 1, id_corredor: 2, id_evento: 2},
        {id_cadeirante: 3, id_corredor: 3, id_evento: 3},
        {id_cadeirante: 4, id_corredor: 4, id_evento: 4},
        {id_cadeirante: 5, id_corredor: 5, id_evento: 5},
        {id_cadeirante: 3, id_corredor: 5, id_evento: 4},
        { id_cadeirante: 2, id_corredor: 6, id_evento: 6 },
        { id_cadeirante: 6, id_corredor: 7, id_evento: 7 },
        { id_cadeirante: 4, id_corredor: 2, id_evento: 3 },
        { id_cadeirante: 7, id_corredor: 8, id_evento: 8 },
        { id_cadeirante: 5, id_corredor: 9, id_evento: 5 },
        { id_cadeirante: 8, id_corredor: 3, id_evento: 6 },
        { id_cadeirante: 6, id_corredor: 10, id_evento: 9 },
        { id_cadeirante: 9, id_corredor: 1, id_evento: 7 },
        { id_cadeirante: 10, id_corredor: 4, id_evento: 10 },
        { id_cadeirante: 7, id_corredor: 6, id_evento: 2 },
    ])

    await Duplas.bulkCreate([
        {id_cadeirante: 1, id_corredor: 1, id_evento: 1},
        {id_cadeirante: 2, id_corredor: 2, id_evento: 2},
        {id_cadeirante: 1, id_corredor: 2, id_evento: 2},
        { id_cadeirante: 3, id_corredor: 3, id_evento: 3 },
        { id_cadeirante: 4, id_corredor: 4, id_evento: 4 },
        { id_cadeirante: 2, id_corredor: 5, id_evento: 2 },
        { id_cadeirante: 5, id_corredor: 2, id_evento: 5 },
        { id_cadeirante: 1, id_corredor: 6, id_evento: 1 },
        { id_cadeirante: 6, id_corredor: 3, id_evento: 6 },
        { id_cadeirante: 3, id_corredor: 1, id_evento: 3 },
        { id_cadeirante: 7, id_corredor: 7, id_evento: 7 },
        { id_cadeirante: 2, id_corredor: 8, id_evento: 2 },
        { id_cadeirante: 4, id_corredor: 6, id_evento: 4 },
    ])

    await Usuario.bulkCreate([
        {email:"admin@exemplo.com", senha:"123456"}
    ])

}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/cadeirante", CadeiranteRouter)
app.use("/corredor", CorredorRouter)
app.use("/evento", EventoRouter)
app.use("/Relatorio", RelatorioRoutes)
app.use("/Grafico", GraficoRouter)
app.use("/Duplas", DuplasRouter)
app.use("/auth", AuthRouter);

await sequelize.drop({force: true})
await sequelize.sync()

insercao()


app.listen(port, () => console.log("Servidor funcionando, Gloria!!"))