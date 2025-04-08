import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../Config/banco.js";

const Relatorio = sequelize.define("Relatorio", {
  id_relatorio: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  ComSemCadeira: {
    type: Sequelize.STRING,
    allowNull: true // só se for cadeirante
  },

  Relatorio.belongsTo(nomeCadeirante, {
    foreignKey: "id_cadeirante"
  });
  
  Relatorio.belongsTo(nomeCorredor, {
    foreignKey: "id_corredor"
  });

});

export { Relatorio };
