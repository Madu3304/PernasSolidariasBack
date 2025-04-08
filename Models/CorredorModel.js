import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../Config/banco.js";

const Corredor = sequelize.define('Corredor', {
    id_corredor:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },

    nomeCorredor:{
        type:Sequelize.STRING,
        allowNull: false

    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },

    DataNascimento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    email:{
        type:Sequelize.STRING,
        allowNull: false
    },

    TamanhoBlusa: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Distancia: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

export {Corredor}