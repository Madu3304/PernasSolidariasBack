import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Config/banco.js";

export const Usuario = sequelize.define("usuario", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false
});