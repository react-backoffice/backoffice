module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**',
    '!**/__tests__/**',
    '!**/dist/**',
    '!**/webpack*',
    '!**/.eslintrc.js',
    '!**/jest.config.js',
  ],
  testMatch: [
    '**/*.test.js?(x)',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  unmockedModulePathPatterns: [
    'node_modules/react/',
    'node_modules/enzyme/',
  ],
}
