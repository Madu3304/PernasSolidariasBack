import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Evento = sequelize.define('Evento', {
    id_evento:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nm_evento:{
        type:Sequelize.STRING,
        allowNull: false

    },

    distancia: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 

    dt_corrida: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },    

    local_corrida:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export {Evento}