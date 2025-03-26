import { Sequelize } from "sequelize";
import sequelize from "../Config/banco.js";

const Corredor = sequelize.define('Corredor', {
    id_cadeirante:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },

    nome:{
        type:Sequelize.STRING,
        allowNull: false

    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },

    DataNascimento:{
        type: Sequelize.DateTime,
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