module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'off',
  },
  plugins: ['import', '@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/server/tsconfig.json'],
      },
    },
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
      extends: ['plugin:jest/recommended'],
    },
  ],
  ignorePatterns: [
    '**/*.js',
    'node_modules',
    '.turbo',
    'public',
    'dist',
    'coverage',
    'config',
  ],
};
