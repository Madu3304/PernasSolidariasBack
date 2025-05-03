import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Corredor = sequelize.define('Corredor', {
    id_corredor:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nomeCompletoCorredor:{
        type:Sequelize.STRING,
        allowNull: false

    },

    cpfCorredor:{
        type: Sequelize.STRING,
        allowNull: false
    },

    TamanhoBlusa: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
})

export {Corredor}