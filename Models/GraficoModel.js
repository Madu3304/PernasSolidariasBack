import { Sequelize } from "sequelize";
import sequelize from "../Config/banco.js";

const Grafico = sequelize.define('Grafico', {
    id_Grafico:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },

    id_cadeirante: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    
    id_corredor: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    
    id_Evento:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },
})

export {Grafico}