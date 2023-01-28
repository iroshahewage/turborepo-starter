module.exports = {
  ...require('@kd/config/jest-server'),
  rootDir: '.',
  modulePathIgnorePatterns: ['config', 'dist'],
};
