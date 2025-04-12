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


const app = express()
// const PORT = process.env.PORT || 8080
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/cadeirante", CadeiranteRouter)
app.use("/corredor", CorredorRouter)
app.use("/evento", EventoRouter)
app.use("/Relatorio", RelatorioRoutes)
app.use("/Grafico", GraficoRouter)

await sequelize.drop()
await sequelize.sync()


app.listen(port, () => console.log("Servidor funcionando, Gloria!!"))