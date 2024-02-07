// jest.config.js

// Configuración de Jest para proyectos TypeScript

module.exports = {
  // Preset utilizado por Jest. 'ts-jest' se utiliza para proyectos TypeScript.
  preset: 'ts-jest',

  // Entorno de prueba. 'node' se utiliza para pruebas de entorno de Node.js.
  testEnvironment: 'node',

  // Directorios raíz donde Jest buscará archivos de prueba.
  roots: ['<rootDir>/src'],

  // Transformaciones aplicadas a los archivos antes de ejecutar las pruebas.
  // En este caso, se está utilizando 'ts-jest' para manejar archivos TypeScript.
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Patrón para buscar archivos de prueba.
  // Se buscarán archivos que coincidan con el patrón especificado.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Extensiones de archivos que Jest debe considerar durante las pruebas.
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
