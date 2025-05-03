import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Cadeirante = sequelize.define('Cadeirante', {
    id_cadeirante:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nomeCompletoCadeirante:{
        type:Sequelize.STRING,
        allowNull: false

    },
    cpfCadeirante:{
        type: Sequelize.STRING,
        allowNull: false
    },

    tamanhoBlusa: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // distanciaCadeirante: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },

    ComSemCadeira: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true
})

export {Cadeirante}