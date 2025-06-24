// eslint.config.js
import globals from "globals";
import js from "@eslint/js";

export default [
  // 1. COMECE com a configuração base recomendada pelo ESLint.
  js.configs.recommended,

  // 2. DEPOIS, aplique suas configurações e regras personalizadas por cima.
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
      },
    },
    // Este objeto 'rules' agora vai sobrescrever corretamente as regras do 'recommended'.
    rules: {
      // Transformando o erro de variável não usada em um simples aviso.
      "no-unused-vars": "warn",
      
      // Mantemos 'no-undef' como um erro, pois ele indica um bug real no código.
      "no-undef": "error", 
    },
  },

  // 3. Adicione a configuração específica para os testes do Jest.
  {
    files: ["__tests__/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];