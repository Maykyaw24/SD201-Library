module.exports = {
    env: {
      node: true,
      jest: true,
    },
    globals: {
      Promise: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 80,
          semi: true,
          trailingComma: 'all',
          tabWidth: 4
        },
      ],
      'require-await': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',
      'no-constant-condition': 'off',
      'no-case-declarations': 'off',
      'no-dupe-class-members': 'off',
    },
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    overrides: [
      {
        files: ['*.ts'],
        rules: {
          'no-undef': 'off',
        },
      },
    ],
  };
  