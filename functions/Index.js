// Importações principais do Firebase e Express
import functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import cors from "cors";

// --- INICIALIZAÇÃO DO FIREBASE ADMIN ---
// Isso permite que seu código de back-end acesse os serviços do Firebase
// import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// Obtenha uma referência para o banco de dados Firestore
const db = admin.firestore();
// Disponibilize a referência 'db' para outros arquivos (como suas rotas)
export { db };

// --- CONFIGURAÇÃO DO EXPRESS ---
const app = express();

app.use(cors({ origin: true })); // O CORS é importante para Cloud Functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// --- IMPORTAÇÃO DAS ROTAS (ADAPTADAS PARA FIREBASE) ---
// O ideal é que cada arquivo de rota agora importe o 'db' do index.js
import { router as CadeiranteRouter } from "./Routes/CadeiranteRoutes.js";
import { router as CorredorRouter } from "./Routes/CorredorRoutes.js";
import { router as EventoRouter } from "./Routes/EventoRoutes.js";
// ... importe as outras rotas da mesma forma

// --- USO DAS ROTAS ---
// O prefixo da rota agora faz parte da configuração do Express
app.use("/cadeirante", CadeiranteRouter);
app.use("/corredor", CorredorRouter);
app.use("/evento", EventoRouter);
// ... adicione as outras rotas aqui
// app.use("/Relatorio", RelatorioRoutes);
// app.use("/Grafico", GraficoRouter);
// app.use("/Duplas", DuplasRouter);
// app.use("/auth", AuthRouter);


// --- EXPORTAR O APP EXPRESS COMO UMA CLOUD FUNCTION ---
// Em vez de app.listen(), você exporta o app.
// O nome "api" será parte da URL da sua função (ex: .../api/cadeirante)
export const api = functions.https.onRequest(app);

// ATENÇÃO: A lógica de inserção de dados (seeding) deve ser tratada de forma diferente.
// Veja a seção sobre "Seeding" abaixo.