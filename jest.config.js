export default {
  testEnvironment: 'node',
  transform: {}, // desativa transformações com Babel, pois usamos ESM nativo
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // remove .js extra quando Jest tenta importar
  },
};