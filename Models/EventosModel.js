import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../Config/banco.js";

const Evento = sequelize.define('Evento', {
    id_Evento:{
        type:Sequelize.INTEGER,
        autoincrement: true,
        PrimaryKey: true
    },

    nomeEvento:{
        type:Sequelize.STRING,
        allowNull: false

    },

    Distancia: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    DataCorrida: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },    

    LocalCorrida:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

export {Evento}