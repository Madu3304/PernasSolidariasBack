import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Cadeirante = sequelize.define('Cadeirante', {
    id_cadeirante:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },

    nomeCompletoCadeirante:{
        type:Sequelize.STRING,
        allowNull: false

    },

    cpfCadeirante:{
        type: Sequelize.STRING,
        allowNull: false
    },

    TamanhoBlusa: {
        type: Sequelize.STRING,
        allowNull: false
    },

    distanciaCadeirante: {
        type: Sequelize.STRING,
        allowNull: false
    },

    ComSemCadeira: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

export {Cadeirante}