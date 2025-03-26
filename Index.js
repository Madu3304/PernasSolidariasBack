import express from "express";
import sequelize from "./Config/banco.js"

const server = express()
server.use(express.json())
server.use(express.urlencoded({extended: true}))

const Port = process.env.Port||8080
server.listen(Port,() =>{
    console.log('Servidor rodando na porta ${port}');
    
})

import { Cadeirante } from "./Models/CadeiranteModel.js";


import { router } from "./Routes/CadeiranteRoutes.js";
// import { router } from "./Routes/CadeiranteRoute.js";
// import { router } from "./Routes/CadeiranteRoute.js";

const app = express()

app.use(express.urlencoded({extended:true}))

await sequelize.sync()

app.use(router)

app.listen(5000, () => console.log("Servidor funcionando, Gloria!!"))