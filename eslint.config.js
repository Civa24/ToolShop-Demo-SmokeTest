import js from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

export default [
  {
    ignores: [
      'node_modules/**',
      'allure-report/**',
      'allure-results/**',
      'allure-fajl/**',
    ],
  },
  js.configs.recommended,

  {
    files: ['tests/**', 'pages/**/*.js', 'playwright.config.js'],
    ...playwright.configs['flat/recommended'],
  },

  {
    languageOptions: {
      globals: {
        process: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
