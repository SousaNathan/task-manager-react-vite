import tseslint from '@typescript-eslint/eslint-plugin'; // Ajuste na importação do plugin TypeScript
import tsParser from '@typescript-eslint/parser'; // Importar o parser do TypeScript
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser, // Usando o parser do TypeScript
      globals: globals.browser,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended', // Adicionando a recomendação do TypeScript
      'plugin:prettier/recommended', // Para integração com o Prettier
    ],
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn'], // Ajuste para avisos de variáveis não utilizadas
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error', // Para garantir a formatação do Prettier
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React para evitar problemas
      },
    },
  },
];
