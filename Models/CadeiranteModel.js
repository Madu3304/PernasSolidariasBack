import { Sequelize } from "sequelize";
import sequelize from "../Config/banco.js";

const Cadeirante = sequelize.define('Cadeirante', {
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
        type: Sequelize.DATE,
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
    },

    ComSemCadeira: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

export {Cadeirante}