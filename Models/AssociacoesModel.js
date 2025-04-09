import { Relatorio } from "./RelatoriosModel.js"
import { Cadeirante } from "./CadeiranteModel.js";
import { Corredor } from "./CorredorModel.js";


Relatorio.belongsTo(Cadeirante, {
  foreignKey: "id_cadeirante",
  as: "cadeirante"
});

Relatorio.belongsTo(Corredor, {
  foreignKey: "id_corredor",
  as: "corredor"
});

Cadeirante.hasMany(Relatorio, { foreignKey: "id_cadeirante" });
Corredor.hasMany(Relatorio, { foreignKey: "id_corredor" });

export { Relatorio, Cadeirante, Corredor };
