import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Relatorio = sequelize.define("Relatorio", {
  id_relatorio: {
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

Relatorio.belongsTo(Cadeirante, { foreignKey: 'id_cadeirante', as: 'cadeirante' }),
Relatorio.belongsTo(Corredor, { foreignKey: 'id_corredor', as: 'corredor' })

);

export { Relatorio };
