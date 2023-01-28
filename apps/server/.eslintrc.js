module.exports = {
  ...require('@kd/config/eslint-server'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.lint.json'],
  },
};
