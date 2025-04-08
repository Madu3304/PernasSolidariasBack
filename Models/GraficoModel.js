import { Sequelize } from "sequelize";
import sequelize from "../Config/banco.js";

const Grafico = sequelize.define('Grafico', {
    id_Evento:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },

    nomeEvento:{
        type:Sequelize.STRING,
        allowNull: false

    },

    Distancia: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export {Grafico}