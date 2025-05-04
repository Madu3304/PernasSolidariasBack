import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Evento = sequelize.define('Evento', {
    id_Evento:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nomeEvento:{
        type:Sequelize.STRING,
        allowNull: false

    },

    distancia: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    dataCorrida: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },    

    localCorrida:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export {Evento}