import { Sequelize } from "sequelize";
import sequelize from "../Config/banco.js";

const Evento = sequelize.define('Evento', {
    id_cadeirante:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },

    nome:{
        type:Sequelize.STRING,
        allowNull: false

    },

    Distancia: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export {Evento}