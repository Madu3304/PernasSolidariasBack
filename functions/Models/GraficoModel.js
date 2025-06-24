import { Sequelize } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Grafico = sequelize.define('Grafico', {
    id_Grafico:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_cadeirante: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    
    id_corredor: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    
    id_evento:{
        type:Sequelize.INTEGER,
        allowNull: true,
    },
}, {
    freezeTableName: true,
    timestamps: false
})

export {Grafico}