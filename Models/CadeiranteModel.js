import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Cadeirante = sequelize.define('Cadeirante', {
    id_cadeirante:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nm_cadeirante:{
        type:Sequelize.STRING,
        allowNull: false

    },
    cpf_cadeirante:{
        type: Sequelize.STRING,
        allowNull: false
    },

    tamanho_blusa: {
        type: Sequelize.STRING,
        allowNull: false
    },

    s_n_cadeira: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false
})

export {Cadeirante}