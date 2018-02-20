module.exports = {
  coverageThreshold: {
    global: {
      // branches: 80,
      // functions: 80,
      // lines: 80,
      // statements: 80,
    },
  },
  testMatch: [
    '**/*.test.js?(x)',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
}
