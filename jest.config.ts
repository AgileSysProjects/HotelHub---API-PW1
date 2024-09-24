module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',  // Transforma arquivos .ts usando ts-jest
    },
    transformIgnorePatterns: [
      '/node_modules/', // Ignora arquivos dentro de node_modules por padrão
    ],
  };
  