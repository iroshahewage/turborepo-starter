module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'node',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: ['src/**/*.{js.ts}'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s?$': ['@swc/jest'],
  },
  coveragePathIgnorePatterns: [],
  coverageThreshold: null,
};
