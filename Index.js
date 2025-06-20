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
        {nm_cadeirante: 'Luiz Cadeirante', cpf_cadeirante: '084', tamanho_blusa: 'gg', s_n_cadeira: 'Sim'},
        {nm_cadeirante: 'Maria Cadeirante', cpf_cadeirante: '085', tamanho_blusa: 'm', s_n_cadeira: 'Não' },
    ])

    await Corredor.bulkCreate([
        {nm_corredor: 'Luiz Corredor', cpf_corredor: '089', tamanho_blusa: 'GG'},
        {nm_corredor: 'Maria Corredora', cpf_corredor: '090', tamanho_blusa: 'GG'},
    ])

    await Evento.bulkCreate([
        {nm_evento: 'Corrida A', distancia: 10, dt_corrida: '2025-05-13', local_corrida: 'Joinville'},
        {nm_evento: 'Corrida B', distancia: 10, dt_corrida: '2025-05-13', local_corrida: 'Joinville'},
    ])

    await Relatorio.bulkCreate([
        {id_cadeirante: 1, id_corredor: 1, id_evento: 1},
        {id_cadeirante: 2, id_corredor: 2, id_evento: 2},
        {id_cadeirante: 1, id_corredor: 2, id_evento: 2},
    ])

    await Duplas.bulkCreate([
        {id_cadeirante: 1, id_corredor: 1, id_evento: 1},
        {id_cadeirante: 2, id_corredor: 2, id_evento: 2},
        {id_cadeirante: 1, id_corredor: 2, id_evento: 2},
    ])

    await Usuario.bulkCreate([
        {email:"admin@exemplo.com", senha:"123456"}
    ])

}

const insercaoExtra = async () => {
    await Cadeirante.bulkCreate([
        {nm_cadeirante: 'João Cadeirante', cpf_cadeirante: '086', tamanho_blusa: 'g', s_n_cadeira: 'Sim'},
        {nm_cadeirante: 'Ana Cadeirante', cpf_cadeirante: '087', tamanho_blusa: 'p', s_n_cadeira: 'Sim'},
        {nm_cadeirante: 'Carlos Cadeirante', cpf_cadeirante: '088', tamanho_blusa: 'm', s_n_cadeira: 'Não'},
    ]);

    await Corredor.bulkCreate([
        {nm_corredor: 'Pedro Corredor', cpf_corredor: '091', tamanho_blusa: 'P'},
        {nm_corredor: 'Juliana Corredora', cpf_corredor: '092', tamanho_blusa: 'M'},
        {nm_corredor: 'Fernanda Corredora', cpf_corredor: '093', tamanho_blusa: 'G'},
    ]);

    await Evento.bulkCreate([
        {nm_evento: 'Corrida C', distancia: 5, dt_corrida: '2025-06-10', local_corrida: 'Florianópolis'},
        {nm_evento: 'Corrida D', distancia: 15, dt_corrida: '2025-06-20', local_corrida: 'Blumenau'},
        {nm_evento: 'Corrida E', distancia: 8, dt_corrida: '2025-07-01', local_corrida: 'Curitiba'},
    ]);

    await Relatorio.bulkCreate([
        {id_cadeirante: 3, id_corredor: 3, id_evento: 3},
        {id_cadeirante: 4, id_corredor: 4, id_evento: 4},
        {id_cadeirante: 5, id_corredor: 5, id_evento: 5},
        {id_cadeirante: 3, id_corredor: 5, id_evento: 4},
    ]);
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
insercaoExtra()


app.listen(port, () => console.log("Servidor funcionando, Gloria!!"))