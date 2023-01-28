module.exports = {
  ...require('@kd/config/eslint-next'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
