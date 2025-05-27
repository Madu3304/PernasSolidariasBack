import { Relatorio } from "./RelatoriosModel.js"
import { Cadeirante } from "./CadeiranteModel.js";
import { Corredor } from "./CorredorModel.js";
import { Evento } from "./EventosModel.js";


Relatorio.belongsTo(Cadeirante, {
  foreignKey: "id_cadeirante",
  as: "cadeirante"
});

Relatorio.belongsTo(Corredor, {
  foreignKey: "id_corredor",
  as: "corredor"
});

Relatorio.belongsTo(Evento,{
  foreignKey: "id_evento",
  as: "evento"
})

Cadeirante.hasMany(Relatorio, { foreignKey: "id_cadeirante" });
Corredor.hasMany(Relatorio, { foreignKey: "id_corredor" });
Evento.hasMany(Relatorio, {foreignKey: "id_evento"})

// Relatorio.belongsTo(Cadeirante, { foreignKey: 'id_cadeirante', as: 'cadeirante' });
// Relatorio.belongsTo(Corredor, { foreignKey: 'id_corredor', as: 'corredor' });


export { Relatorio, Cadeirante, Corredor };

