import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

const Relatorio = sequelize.define("Relatorio", {
  id_relatorio: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  ComSemCadeira: {
    type: Sequelize.STRING,
    allowNull: true,
  },
 
  id_cadeirante: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  id_corredor: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

});

export { Relatorio };
