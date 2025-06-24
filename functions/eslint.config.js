// eslint.config.js
import globals from "globals";
import js from "@eslint/js";

export default [
  // 1. Carrega o conjunto de regras recomendadas pelo ESLint
  js.configs.recommended,

  // 2. Aplica sua configuração personalizada sobre as regras recomendadas
  {
    files: ["**/*.js"], // Aplica a todos os arquivos .js
    languageOptions: {
      sourceType: "module", // <-- ESTA É A CORREÇÃO PRINCIPAL
      ecmaVersion: "latest",
      globals: {
        ...globals.node, // Disponibiliza as variáveis globais do Node.js
      },
    },
    rules: {
      // Aqui você pode adicionar ou modificar regras se precisar
      // Ex: "semi": "error"
    },
  },
];