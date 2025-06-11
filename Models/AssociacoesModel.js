import { Duplas } from "./DuplasModel.js"
import { Cadeirante } from "./CadeiranteModel.js";
import { Corredor } from "./CorredorModel.js";
import { Evento } from "./EventosModel.js";


Duplas.belongsTo(Cadeirante, {
  foreignKey: "id_cadeirante",
  as: "cadeirante"
});

Duplas.belongsTo(Corredor, {
  foreignKey: "id_corredor",
  as: "corredor"
});

Duplas.belongsTo(Evento,{
  foreignKey: "id_evento",
  as: "evento"
})

Cadeirante.hasMany(Duplas, { foreignKey: "id_cadeirante" })
Corredor.hasMany(Duplas, { foreignKey: "id_corredor" })
Evento.hasMany(Duplas, {foreignKey: "id_evento"})

// Duplas.belongsTo(Cadeirante, { foreignKey: 'id_cadeirante', as: 'cadeirante' });
// Duplas.belongsTo(Corredor, { foreignKey: 'id_corredor', as: 'corredor' });

export { Duplas, Cadeirante, Corredor }