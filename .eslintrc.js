module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['prettier'],
  ignorePatterns: ['public/build'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3', '@typescript-eslint', 'jest'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': ['off'],
        'import/no-duplicates': ['off'],
        'import/no-mutable-exports': ['off'],
      },
    },
    {
      files: ['.eslintrc.js', '.prettierrc.js', 'jest-setup.ts'],
      rules: {
        'global-require': ['off'],
        'import/no-extraneous-dependencies': ['off'],
      },
    },
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
  },
  rules: {},
};
