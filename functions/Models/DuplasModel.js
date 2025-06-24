import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Duplas = sequelize.define("Duplas", {
  id_Duplas: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
 
  id_cadeirante: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  id_corredor: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  id_evento: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

}, {
  freezeTableName: true,
  timestamps: false
},

// Duplas.belongsTo(Cadeirante, { foreignKey: 'id_cadeirante', as: 'cadeirante' }),
// Duplas.belongsTo(Corredor, { foreignKey: 'id_corredor', as: 'corredor' })

);

export { Duplas };
