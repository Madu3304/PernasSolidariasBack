import express from "express"
import { sequelize } from "./Config/banco.js"
import cors from 'cors'
import { Cadeirante } from "./Models/CadeiranteModel.js"
import { Corredor } from "./Models/CorredorModel.js"
import { Evento } from "./Models/EventosModel.js"

import { router as CadeiranteRouter } from "./Routes/CadeiranteRoutes.js"
import { router as CorredorRouter } from "./Routes/CorredorRoutes.js"
import { router as EventoRouter} from "./Routes/EventoRoutes.js"
import { router as GraficoRouter } from "./Routes/GraficoRoutes.js"
import { router as RelatorioRoutes } from "./Routes/RelatorioRoutes.js"
import { Relatorio } from "./Models/RelatoriosModel.js"


const app = express()
// const PORT = process.env.PORT || 8080
const port = 3000

const insersao = async () => {
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
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/cadeirante", CadeiranteRouter)
app.use("/corredor", CorredorRouter)
app.use("/evento", EventoRouter)
app.use("/Relatorio", RelatorioRoutes)
app.use("/Grafico", GraficoRouter)

await sequelize.drop({force: true})
await sequelize.sync()

insersao()


app.listen(port, () => console.log("Servidor funcionando, Gloria!!"))