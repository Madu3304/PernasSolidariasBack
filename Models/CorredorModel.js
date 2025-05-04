import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Corredor = sequelize.define('Corredor', {
    id_corredor:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nm_corredor:{
        type:Sequelize.STRING,
        allowNull: false

    },

    cpf_corredor:{
        type: Sequelize.STRING,
        allowNull: false
    },

    tamanho_blusa: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export {Corredor}