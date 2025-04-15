import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Corredor = sequelize.define('Corredor', {
    id_corredor:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
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
})

export {Corredor}